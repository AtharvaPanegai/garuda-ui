/** @format */

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../Components/ui/select";
import { Card, CardContent, CardHeader } from "../../Components/ui/card";
import { Input } from "../../Components/ui/input";
import { Label } from "../../Components/ui/label";
import { Button } from "../../Components/ui/button";
import { Switch } from "../../Components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Copy, PlusCircleIcon, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useProject } from "../../hooks/useProject";
import { useApi } from "../../hooks/useApi";
import { useToast } from "../../hooks/use-toast";
import { useNavigate } from "react-router-dom";

export default function ProjectSettings() {
  const navigate = useNavigate();
  const _navigateTo = (path) => navigate(path);

  // redux hooks
  let allprojects = useSelector((state) => state.project.allprojects);
  let currentUser = useSelector((state) => state.user.userInfo);

  const [selectedProject, setSelectedProject] = useState(allprojects[0] ?? {});
  const [allProjectsState, setAllProjectsState] = useState([]);
  const [apisState, setApisState] = useState([]);
  const [onCallPersonState, setOnCallPersonState] = useState(
    allprojects[0].onCallPerson ?? {}
  );
  const [apiMonitoringState, setApiMonitoringState] = useState({});
  const [projectapiKeyState, setProjectapiKeyState] = useState("");
  const [disablecreateNewProject, setDisablecreateNewProject] = useState(false);
  const [disableMonitoringEnable, setDisableMonitoringEnable] = useState(false);

  // custom hooks
  const { getApisInProject, addOnCallPerson, createapikey } = useProject();
  const { enableMonitoring, disableMonitoring } = useApi();
  const { toast } = useToast();

  // function to store initial monitoring state for all apis
  const _setApiStateforAllApis = (apis) => {
    const initialState = apis?.reduce((state, api) => {
      state[api._id] = api.isRadarEnabled;
      return state;
    });

    setApiMonitoringState(initialState);
  };

  const fetchApisAndStore = async () => {
    let apisResponse = await getApisInProject(
      selectedProject._id,
      currentUser._id
    );
    setApisState(apisResponse);
    _setApiStateforAllApis(apisResponse);
  };
  useEffect(() => {
    setAllProjectsState(allprojects);
    fetchApisAndStore();
    setOnCallPersonState(
      selectedProject?.onCallPerson || {
        onCallPersonEmail: "",
        onCallPersonPhoneNumber: "",
        onCallPersonName: "",
      }
    );
    setProjectapiKeyState(selectedProject?.apiKey || "");
    if(allprojects.length >= 2){
      setDisablecreateNewProject(true);
    }
  }, [selectedProject]);
  
  useEffect(()=>{
    console.log(`this is api monitoring state : ${countEnabledApis(apiMonitoringState)}`)
    if(countEnabledApis(apiMonitoringState)>4){
      setDisableMonitoringEnable(true);
    }else{
      setDisableMonitoringEnable(false);
    }
  },[apiMonitoringState])

  const copyApiKey = () => {
    navigator.clipboard.writeText(selectedProject.apiKey);
  };

  const _parseapiEndPoint = (apiEndPoint) => {
    return apiEndPoint.substring(apiEndPoint.indexOf("/"));
  };

  const _handleApiMonitoring = async (apiId, e) => {
    try {
      if (e) {
        await enableMonitoring(apiId);
        toast({
          title: "Monitoring is Enabled!",
          variant: "success",
        });
      } else if (e === false) {
        await disableMonitoring(apiId);
        toast({
          title: "Monitoring is Disabled!",
          variant: "error",
        });
      }
    } catch (err) {
      console.error(`Unable to change Monitoring prefrences for this API`);
      throw err;
    }
  };

  function countEnabledApis(fullApiObject) {
    const keysToIgnore = [
      "_id",
      "apiEndPoint",
      "apiMethod",
      "project",
      "customer",
      "isCurrentlyDown",
      "isRadarEnabled",
      "createdAt",
      "__v",
    ];
  
    return Object.entries(fullApiObject)
      .filter(([key, value]) => !keysToIgnore.includes(key) && value === true)
      .length;
  }

  const _handleSwitchChangeForApiMonitoring = (apiId) => {
    setApiMonitoringState((prevState) => {
      const newState = { ...prevState, [apiId]: !prevState[apiId] };
      _handleApiMonitoring(apiId, newState[apiId]);
      return newState;
    });
  };

  const _handleOnCallPersonChange = (type, value) => {
    setOnCallPersonState((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  const _handleSaveChanges = async () => {
    try {
      let addonCallPersonAddObject = {
        ...onCallPersonState,
        projectId: selectedProject._id,
      };
      let resp = await addOnCallPerson(addonCallPersonAddObject);
      return resp ? resp : alert(`Unable to update oncall person for project`);
    } catch (err) {
      console.error(`Unable to update oncall person for project`);
      throw err;
    }
  };

  const _handleGenApiKey = async () => {
    try {
      let apiCreationObject = {
        userId: currentUser._id,
        projectId: selectedProject._id,
      };
      let newApikey = await createapikey(apiCreationObject);

      setProjectapiKeyState(newApikey);
    } catch (err) {
      console.error(
        `Unable to generate api key for this project... try again after sometime `
      );
      throw err;
    }
  };

  return (
    <div className='min-h-screen bg-black p-6 space-y-6'>
      <h1 className='text-2xl font-semibold text-purple-500'>
        Project Settings
      </h1>

      <div className="flex flex-row justify-between items-center">
        <div className='mb-6 text-white'>
          <Label
            htmlFor='project-select'
            className='text-purple-500 mb-2 block '>
            Select Project
          </Label>
          <Select value={selectedProject} onValueChange={setSelectedProject}>
            <SelectTrigger
              id='project-select'
              className='w-[300px] bg-black border-purple-500/20 focus:ring-purple-500'>
              <SelectValue
                className='text-white'
                placeholder='Select a project'
              />
            </SelectTrigger>
            <SelectContent className='bg-black border-purple-500/20'>
              {allProjectsState.map((project) => {
                return (
                  <SelectItem
                    key={project._id}
                    value={project}
                    className='focus:bg-purple-500 text-white'>
                    {project.projectName}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button disabled={disablecreateNewProject} onClick={() => _navigateTo("/createproject")}>
            <PlusCircleIcon />
            Create New Project
          </Button>
        </div>
      </div>

      <Card className='bg-black border border-purple-500/20'>
        <CardHeader className='flex flex-row items-center gap-2 text-purple-500'>
          <h2 className='text-lg font-medium'>Project Details</h2>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='space-y-2'>
            <Label htmlFor='name'>Project Name</Label>
            <Input
              id='name'
              disabled={true}
              value={selectedProject?.projectName}
              className='bg-black border-purple-500/20 focus-visible:ring-purple-500'
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='description'>Project Id</Label>
            <Input
              id='projectId'
              disabled={true}
              value={selectedProject._id}
              className='bg-black border-purple-500/20 focus-visible:ring-purple-500'
            />
          </div>

          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label>API Key</Label>
              <div className='flex gap-2'>
                <Input
                  readOnly
                  placeholder='Generate API Key to start using Garuda API'
                  value={projectapiKeyState}
                  className='font-mono bg-black border-purple-500/20'
                />
                <Button
                  variant='outline'
                  size='icon'
                  onClick={copyApiKey}
                  className='shrink-0 border-purple-500/20 hover:bg-purple-500 hover:text-white'>
                  <Copy className='h-4 w-4' />
                </Button>
              </div>
            </div>
            <Button
              onClick={_handleGenApiKey}
              type='button'
              variant='outline'
              className='border-purple-500/20 hover:bg-purple-500 hover:text-white'>
              <RefreshCw className='mr-2 h-4 w-4' />
              {selectedProject?.apiKey
                ? "ReGenerate API Key"
                : "Generate API Key"}
            </Button>
          </div>

          {/* <div className="space-y-4">
            <Label>Notifications</Label>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="incidents" className="cursor-pointer">Incident Alerts</Label>
                <Switch 
                  id="incidents" 
                  defaultChecked 
                  className="data-[state=checked]:bg-purple-500"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="performance" className="cursor-pointer">Performance Alerts</Label>
                <Switch 
                  id="performance" 
                  defaultChecked 
                  className="data-[state=checked]:bg-purple-500"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="updates" className="cursor-pointer">System Updates</Label>
                <Switch 
                  id="updates" 
                  defaultChecked 
                  className="data-[state=checked]:bg-purple-500"
                />
              </div>
            </div>
          </div> */}

          <div className='space-y-4'>
            <Label>On-Call Contact</Label>
            <div className='space-y-2'>
              <Input
                onChange={(e) =>
                  _handleOnCallPersonChange("onCallPersonName", e.target.value)
                }
                placeholder='Name'
                value={onCallPersonState?.onCallPersonName}
                className='bg-black border-purple-500/20 focus-visible:ring-purple-500'
              />
              <Input
                onChange={(e) =>
                  _handleOnCallPersonChange("onCallPersonEmail", e.target.value)
                }
                type='email'
                placeholder='EmailId'
                value={onCallPersonState?.onCallPersonEmail}
                className='bg-black border-purple-500/20 focus-visible:ring-purple-500'
              />
              <Input
                onChange={(e) =>
                  _handleOnCallPersonChange(
                    "onCallPersonPhoneNumber",
                    e.target.value
                  )
                }
                placeholder='Phone Number'
                value={onCallPersonState?.onCallPersonPhoneNumber}
                className='bg-black border-purple-500/20 focus-visible:ring-purple-500'
              />
            </div>
          </div>

          <Button
            type='button'
            onClick={_handleSaveChanges}
            className='w-full bg-purple-500 hover:bg-purple-600'>
            Save Changes
          </Button>
        </CardContent>
      </Card>

      <Card className='bg-black border border-purple-500/20'>
        <CardHeader className='flex flex-row items-center gap-2 text-purple-500'>
          <h2 className='text-lg font-medium'>API List</h2>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='text-purple-500'>S.No</TableHead>
                <TableHead className='text-purple-500'>API Endpoint</TableHead>
                <TableHead className='text-purple-500'>Monitoring</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apisState.map((api, i) => (
                <TableRow key={api._id}>
                  <TableCell className='font-medium'>{i + 1}</TableCell>
                  <TableCell>{_parseapiEndPoint(api.apiEndPoint)}</TableCell>
                  <TableCell>
                    <Switch
                      checked={apiMonitoringState[api._id] || false}
                      onCheckedChange={(e) =>
                        _handleSwitchChangeForApiMonitoring(api._id)
                      }
                      disabled = {apiMonitoringState[api._id] ? false : disableMonitoringEnable}
                      className='data-[state=checked]:bg-purple-500'
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
