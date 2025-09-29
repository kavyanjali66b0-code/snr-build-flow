import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, CheckCircle2, Building2, MapPin, IndianRupee, Phone, Mail, User } from 'lucide-react';

interface LeadFormProps {
  onClose: () => void;
}

type FormData = {
  name: string;
  phone: string;
  email: string;
  hasPlot: string;
  city: string;
  budget: string;
};

export const LeadForm = ({ onClose }: LeadFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    hasPlot: '',
    city: '',
    budget: ''
  });

  const totalSteps = 5;

  const cities = [
    'Hyderabad',
    'Shamshabad', 
    'Rajendra Nagar',
    'Maheshwaram',
    'Shadnagar',
    'L.B Nagar',
    'Nagole',
    'Uppal',
    'Meerpet',
    'Others'
  ];

  const budgetOptions = [
    '20 Lakhs – 30 Lakhs',
    '30 Lakhs – 50 Lakhs', 
    '1 Crore – 2 Crore'
  ];

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically submit the form data
    console.log('Form submitted:', formData);
    setStep(totalSteps + 1); // Show thank you screen
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name && formData.phone && formData.email;
      case 2:
        return formData.hasPlot;
      case 3:
        return formData.city;
      case 4:
        return formData.budget;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-white border-b p-4 flex items-center justify-between">
        <Button variant="ghost" onClick={onClose} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Close</span>
        </Button>
        <div className="text-primary font-semibold">SNR Infra BuildTech</div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex gap-1">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`flex-1 h-2 rounded ${
                  i < step ? 'bg-primary' : i === step - 1 ? 'bg-cta' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 container mx-auto px-4 py-8 max-w-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-cta rounded-full flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <div className="text-sm text-muted-foreground mb-2">SNR Infra BuildTech</div>
          <div className="text-xs text-muted-foreground">107K followers</div>
        </div>

        <Card className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
                <p className="text-muted-foreground text-sm">Let's start with your basic information</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    type="tel"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    placeholder="Enter your email address"
                    type="email"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">Do you own a Plot or Site?</h2>
              </div>
              
              <RadioGroup 
                value={formData.hasPlot} 
                onValueChange={(value) => updateFormData('hasPlot', value)}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="flex-1 cursor-pointer">
                    ✅ Yes, I own a plot
                  </Label>
                </div>
                
                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                  <RadioGroupItem value="planning" id="planning" />
                  <Label htmlFor="planning" className="flex-1 cursor-pointer">
                    🏗️ I am planning to buy a plot
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">In which city is your plot located?</h2>
              </div>
              
              <RadioGroup 
                value={formData.city} 
                onValueChange={(value) => updateFormData('city', value)}
                className="space-y-3"
              >
                {cities.map((city) => (
                  <div key={city} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50">
                    <RadioGroupItem value={city} id={city} />
                    <Label htmlFor={city} className="flex-1 cursor-pointer">
                      {city}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">What is your Budget?</h2>
              </div>
              
              <RadioGroup 
                value={formData.budget} 
                onValueChange={(value) => updateFormData('budget', value)}
                className="space-y-4"
              >
                {budgetOptions.map((budget) => (
                  <div key={budget} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                    <RadioGroupItem value={budget} id={budget} />
                    <Label htmlFor={budget} className="flex-1 cursor-pointer">
                      {budget}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">Review Your Information</h2>
                <p className="text-muted-foreground text-sm">Please confirm your details before submitting</p>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="font-medium">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plot Status:</span>
                  <span className="font-medium">{formData.hasPlot === 'yes' ? 'Own a plot' : 'Planning to buy'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">City:</span>
                  <span className="font-medium">{formData.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Budget:</span>
                  <span className="font-medium">{formData.budget}</span>
                </div>
              </div>
            </div>
          )}

          {step > totalSteps && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-trust rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-2">Thank You!</h2>
                <p className="text-muted-foreground mb-4">
                  Thank you for choosing SNR Infra BuildTech! Our team will contact you shortly to discuss your project.
                </p>
                <p className="text-sm text-muted-foreground">
                  SNR Infra BuildTech — Built on Trust, Rooted in Quality
                </p>
              </div>
              
              <Button onClick={onClose} className="w-full">
                Close
              </Button>
            </div>
          )}
        </Card>

        {/* Navigation Buttons */}
        {step <= totalSteps && (
          <div className="flex gap-4 mt-6">
            {step > 1 && (
              <Button variant="outline" onClick={handleBack} className="flex-1">
                Back
              </Button>
            )}
            
            <Button 
              onClick={step === totalSteps ? handleSubmit : handleNext}
              disabled={!isStepValid()}
              className="flex-1 bg-primary hover:bg-primary-dark"
            >
              {step === totalSteps ? 'Submit' : 'Continue'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};