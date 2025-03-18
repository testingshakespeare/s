import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Building2, Briefcase, Users, Phone, Mail, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BusinessAssessmentDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  trigger?: React.ReactNode;
}

export function BusinessAssessmentDialog({ open, setOpen, trigger }: BusinessAssessmentDialogProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    employeeCount: "",
    location: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Business assessment request:", formData);
    
    // Show success toast
    toast({
      title: "Assessment Request Submitted",
      description: "Our commercial solar team will contact you within 1 business day.",
      duration: 5000,
    });
    
    // Reset form and close dialog
    setFormData({
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      businessType: "",
      employeeCount: "",
      location: "",
      message: "",
    });
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Business Solar Assessment</DialogTitle>
          <DialogDescription>
            Complete the form below to request a personalized assessment for your business solar needs.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="businessName" className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-sunfinity-500" />
                Business Name
              </Label>
              <Input
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="Your business name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contactName" className="flex items-center gap-2">
                <Users className="h-4 w-4 text-sunfinity-500" />
                Contact Person
              </Label>
              <Input
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                placeholder="Full name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sunfinity-500" />
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sunfinity-500" />
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 555-5555"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="businessType" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-sunfinity-500" />
                Business Type
              </Label>
              <Select 
                onValueChange={(value) => handleSelectChange("businessType", value)}
                value={formData.businessType}
              >
                <SelectTrigger id="businessType">
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="office">Office Building</SelectItem>
                  <SelectItem value="warehouse">Warehouse</SelectItem>
                  <SelectItem value="education">Educational</SelectItem>
                  <SelectItem value="hospitality">Hospitality</SelectItem>
                  <SelectItem value="agricultural">Agricultural</SelectItem>
                  <SelectItem value="government">Government</SelectItem>
                  <SelectItem value="data_center">Data Center</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="employeeCount" className="flex items-center gap-2">
                <Users className="h-4 w-4 text-sunfinity-500" />
                Company Size
              </Label>
              <Select 
                onValueChange={(value) => handleSelectChange("employeeCount", value)}
                value={formData.employeeCount}
              >
                <SelectTrigger id="employeeCount">
                  <SelectValue placeholder="Number of employees" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-500">201-500 employees</SelectItem>
                  <SelectItem value="501+">501+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sunfinity-500" />
                Business Location
              </Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="City, State"
                required
              />
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message" className="flex items-center gap-2">
                Additional Information
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your energy needs, facility details, or any specific questions you have..."
                className="min-h-[120px]"
              />
            </div>
          </div>
          
          <DialogFooter className="pt-4">
            <Button
              type="submit"
              className="w-full bg-sunfinity-500 hover:bg-sunfinity-600 text-white"
            >
              Submit Assessment Request
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
} 