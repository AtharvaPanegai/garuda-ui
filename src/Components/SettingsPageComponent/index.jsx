/** @format */

import React, { useState } from "react";
import { Save, Bell, Lock, CreditCard, User } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Input } from "../ui/input";
import { useSelector } from "react-redux";

function SettingsPageComponent() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  });

  const handleNotificationChange = (type) => {
    setNotifications((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  let currentUser = useSelector((state) => state.user.userInfo);

  return (
    <div className='min-h-screen bg-black text-white p-8'>
      <h1 className='text-3xl font-bold text-[#9333EA] mb-6'>
        Account Settings
      </h1>

      <div className='space-y-6'>
        {/* Profile Settings */}
        <Card className='bg-black/50 backdrop-blur-sm border border-gray-800'>
          <CardHeader>
            <CardTitle className='text-[#9333EA] flex items-center'>
              <User className='mr-2' />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-400 mb-1'>
                Name
              </label>
              <Input
                id='name'
                name='name'
                value={currentUser.username}
                onChange={handleUserChange}
                className='bg-black/30 border-gray-700 text-white'
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-400 mb-1'>
                Email
              </label>
              <Input
                id='email'
                name='email'
                type='email'
                value={currentUser.emailId}
                onChange={handleUserChange}
                className='bg-black/30 border-gray-700 text-white'
              />
            </div>
            <div>
              <label
                htmlFor='company'
                className='block text-sm font-medium text-gray-400 mb-1'>
                Company
              </label>
              <Input
                id='company'
                name='company'
                value={currentUser.companyName}
                onChange={handleUserChange}
                className='bg-black/30 border-gray-700 text-white'
              />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className='bg-black/50 backdrop-blur-sm border border-gray-800'>
          <CardHeader>
            <CardTitle className='text-[#9333EA] flex items-center'>
              <Bell className='mr-2' />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex items-center justify-between'>
              <span>Email Notifications</span>
              <Switch
                label='Email Notifications are triggered by default'
                disabled={true}
                checked={notifications.email}
                onCheckedChange={() => handleNotificationChange("email")}
              />
            </div>
            <div className='relative flex items-center justify-between'>
              <span className=''>Push Notifications</span>
              <div className='absolute inset-0 flex items-center justify-center'>
                <span className='text-sm font-semibold text-[#9333EA]'>
                  Coming Soon
                </span>
              </div>
              <Switch
                checked={false}
                onCheckedChange={() => {}}
                disabled={true}
                className='blur-sm'
              />
            </div>
            <div className='relative flex items-center justify-between'>
              <span className=''>SMS Notifications</span>
              <div className='absolute inset-0 flex items-center justify-center'>
                <span className='text-sm font-semibold text-[#9333EA]'>
                  Coming Soon
                </span>
              </div>
              <Switch
                checked={false}
                onCheckedChange={() => {}}
                disabled={true}
                className='blur-sm'
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        {/* <Card className='bg-black/50 backdrop-blur-sm border border-gray-800'>
          <CardHeader>
            <CardTitle className='text-[#9333EA] flex items-center'>
              <Lock className='mr-2' />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Button
              variant='outline'
              className='w-full justify-start text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10'>
              Change Password
            </Button>
            <Button
              variant='outline'
              className='w-full justify-start text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10'>
              Two-Factor Authentication
            </Button>
          </CardContent>
        </Card> */}

        {/* Billing Settings */}
        {/* <Card className='bg-black/50 backdrop-blur-sm border border-gray-800'>
          <CardHeader>
            <CardTitle className='text-[#9333EA] flex items-center'>
              <CreditCard className='mr-2' />
              Billing
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Button
              variant='outline'
              className='w-full justify-start text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10'>
              Manage Subscription
            </Button>
            <Button
              variant='outline'
              className='w-full justify-start text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10'>
              Update Payment Method
            </Button>
          </CardContent>
        </Card> */}

        <Button className='w-full bg-[#9333EA] hover:bg-[#7E22CE] text-white'>
          <Save className='mr-2' />
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export default SettingsPageComponent;
