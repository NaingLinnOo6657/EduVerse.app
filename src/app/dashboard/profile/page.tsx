
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Building, Mail, Plus, Award, GitMerge, BookOpen, BarChart, FileText, CheckCircle, Users } from "lucide-react";

const StudentProfile = () => (
    <>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
              <h1 className="text-2xl font-bold">Alex Student</h1>
              <p className="text-muted-foreground">Computer Science Student at EduVerse University</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><GraduationCap className="h-4 w-4" /> Student</span>
              </div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
              <Button><Plus className="h-4 w-4 mr-2"/> Connect</Button>
              <Button variant="outline"><Mail className="h-4 w-4 mr-2" /> Message</Button>
          </div>
      </div>
      <Tabs defaultValue="learning">
        <TabsList>
          <TabsTrigger value="learning">Learning Path</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
        </TabsList>
        <TabsContent value="learning">
          <Card>
            <CardHeader><CardTitle>Learning Progress</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <BarChart className="h-5 w-5 text-primary" />
                <p>Web Development Track - 75% complete</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="projects">
          <Card>
            <CardHeader><CardTitle>Completed Projects</CardTitle></CardHeader>
            <CardContent className="space-y-4">
               <div className="flex items-center gap-4">
                <GitMerge className="h-5 w-5 text-primary" />
                <p>AI Plant Identifier Web App</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="certificates">
          <Card>
            <CardHeader><CardTitle>Certificates</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Award className="h-5 w-5 text-primary" />
                <p>React Fundamentals - Issued by EduVerse</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
);

const ProfessionalProfile = () => (
    <>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
              <h1 className="text-2xl font-bold">Dr. Jane Professional</h1>
              <p className="text-muted-foreground">Astrophysicist & Educator at Quantum University</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> Professional</span>
              </div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
              <Button><Plus className="h-4 w-4 mr-2"/> Follow</Button>
              <Button variant="outline"><Mail className="h-4 w-4 mr-2" /> Message</Button>
          </div>
      </div>
       <Tabs defaultValue="publications">
        <TabsList>
          <TabsTrigger value="publications">Publications</TabsTrigger>
          <TabsTrigger value="courses">Courses Taught</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="publications">
          <Card>
            <CardHeader><CardTitle>Recent Publications</CardTitle></CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                    <FileText className="h-5 w-5 text-primary" />
                    <p>"The Quantum Nature of Black Holes" - Nature Physics, 2023</p>
                </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="courses">
          <Card>
            <CardHeader><CardTitle>Courses Taught</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <p>PHYS 301: Advanced Quantum Mechanics</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="skills">
          <Card>
            <CardHeader><CardTitle>Skills & Endorsements</CardTitle></CardHeader>
            <CardContent className="space-y-4">
               <div className="flex items-center gap-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <p>Astrophysics, Quantum Computing, Data Analysis</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
);

const AdminProfile = () => (
    <>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
              <h1 className="text-2xl font-bold">EduVerse Admin</h1>
              <p className="text-muted-foreground">Platform Administrator at EduVerse</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Building className="h-4 w-4" /> Admin</span>
              </div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
              <Button variant="outline"><Mail className="h-4 w-4 mr-2" /> Message</Button>
          </div>
      </div>
       <Tabs defaultValue="courses">
        <TabsList>
          <TabsTrigger value="courses">Courses Managed</TabsTrigger>
          <TabsTrigger value="channels">Channels Hosted</TabsTrigger>
          <TabsTrigger value="institution">Institution Details</TabsTrigger>
        </TabsList>
        <TabsContent value="courses">
          <Card>
            <CardHeader><CardTitle>Managed Courses</CardTitle></CardHeader>
            <CardContent className="space-y-4">
               <div className="flex items-center gap-4">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <p>Introduction to Computer Science (CS101)</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="channels">
          <Card>
            <CardHeader><CardTitle>Hosted Channels</CardTitle></CardHeader>
             <CardContent className="space-y-4">
               <div className="flex items-center gap-4">
                  <Users className="h-5 w-5 text-primary" />
                  <p>AI & Machine Learning Hub</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="institution">
          <Card>
            <CardHeader><CardTitle>Institution Details</CardTitle></CardHeader>
            <CardContent>
                <p>EduVerse Global University - The official learning platform.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
);


export default function ProfilePage() {
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedRole = localStorage.getItem('userRole');
            setRole(storedRole || 'student'); // Default to student if no role is set
        }
    }, []);


  const renderProfile = () => {
    switch (role) {
      case 'student':
        return <StudentProfile />;
      case 'professional':
        return <ProfessionalProfile />;
      case 'admin':
        return <AdminProfile />;
      default:
        return <div>Loading profile...</div>;
    }
  };

  const getProfileData = () => {
    switch(role) {
      case 'student': return { name: 'Alex Student', avatar: 'AS' };
      case 'professional': return { name: 'Dr. Jane Professional', avatar: 'JP' };
      case 'admin': return { name: 'EduVerse Admin', avatar: 'EA' };
      default: return { name: '', avatar: ''};
    }
  }

  const profileData = getProfileData();

  if (!role) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <div className="relative">
          <Image
            src="https://placehold.co/1200x300.png"
            alt="Cover image"
            width={1200}
            height={300}
            className="w-full h-48 object-cover"
            data-ai-hint="abstract background"
          />
          <div className="absolute top-24 left-6">
            <Avatar className="h-32 w-32 border-4 border-card">
              <AvatarImage src={`https://placehold.co/128x128.png`} data-ai-hint="professional person"/>
              <AvatarFallback>{profileData.avatar}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="pt-20 p-6 space-y-6">
          {renderProfile()}
        </div>
      </Card>
    </div>
  );
}
