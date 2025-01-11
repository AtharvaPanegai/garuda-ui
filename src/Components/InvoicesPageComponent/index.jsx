import React, { useState } from 'react';
import { Download, ChevronDown, Search } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

// Mock data for invoices
const invoices = [
  { id: 'INV-001', date: '2023-05-01', amount: 299.99, status: 'Paid' },
  { id: 'INV-002', date: '2023-06-01', amount: 299.99, status: 'Paid' },
  { id: 'INV-003', date: '2023-07-01', amount: 349.99, status: 'Pending' },
  { id: 'INV-004', date: '2023-08-01', amount: 349.99, status: 'Overdue' },
  { id: 'INV-005', date: '2023-09-01', amount: 349.99, status: 'Paid' },
];

function InvoicesPageComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredInvoices = invoices.filter(invoice => 
    invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (statusFilter === 'All' || invoice.status === statusFilter)
  );

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-[#9333EA] mb-6">Invoices</h1>

      <Card className="bg-black/50 backdrop-blur-sm border border-gray-800 mb-6">
        <CardHeader>
          <CardTitle className="text-[#9333EA]">Invoice Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Search invoices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-black/30 border-gray-700 text-white flex-grow"
              startIcon={<Search className="text-gray-400" />}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full md:w-auto justify-between">
                  {statusFilter} <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-sm border border-gray-800">
                {['All', 'Paid', 'Pending', 'Overdue'].map((status) => (
                  <DropdownMenuItem 
                    key={status} 
                    onSelect={() => setStatusFilter(status)}
                    className="text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10"
                  >
                    {status}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {filteredInvoices.map((invoice) => (
          <Card key={invoice.id} className="bg-black/50 backdrop-blur-sm border border-gray-800">
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <h3 className="font-semibold text-white">{invoice.id}</h3>
                <p className="text-sm text-gray-400">{invoice.date}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-white">${invoice.amount.toFixed(2)}</p>
                <p className={`text-sm ${
                  invoice.status === 'Paid' ? 'text-green-500' :
                  invoice.status === 'Pending' ? 'text-yellow-500' :
                  'text-red-500'
                }`}>
                  {invoice.status}
                </p>
              </div>
              <Button variant="ghost" className="text-[#9333EA] hover:bg-[#9333EA]/10">
                <Download className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default InvoicesPageComponent;