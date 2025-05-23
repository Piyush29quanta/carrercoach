"use client";

import { saveResume } from "@/actions/resume";
import { resumeSchema } from "@/app/lib/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import useFetch from "@/hooks/use-fetch";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle, Download, Edit, Loader2, Monitor, Save } from "lucide-react";
import { use, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import EntryForm from "./entry-form";
import { entriesToMarkdown } from "@/app/lib/helper";
import MDEditor from "@uiw/react-md-editor";
import { useUser } from "@clerk/nextjs";




const ResumeBuilder = ({ initialContent }) => {
    const [activeTab, setActiveTab] = useState("edit");
    const [resumeMode, setResumeMode] = useState("preview");
    const [previewContent, setPreviewContent] = useState(initialContent);
    const {user} = useUser();
    const [isGenerating, setIsGenerating] = useState(false);

    const {
        control,
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(resumeSchema),
        defaultValues: {
            contactInfo: {},
            summary: "",
            skills: "",
            experience: [],
            education: [],
            projects: [],
        },
    })
    const {
        loading: isSaving,
        fn: saveResumeFn,
        data: saveResult,
        error: saveError,
    } = useFetch(saveResume);

    const formValues = watch();

    useEffect(() => {
        if (initialContent) setActiveTab("preview");
    }, [initialContent]);

    useEffect(() => {
        if (activeTab === "preview") {
            const newContent = getCombinedContent();
            setPreviewContent(newContent ? newContent : initialContent);
        }
        }, [formValues, activeTab]);

    const getContactMarkdown = () => {
        const { contactInfo } = formValues;
        const parts = [];
        if (contactInfo.email) parts.push(`📧 ${contactInfo.email}`);
        if (contactInfo.mobile) parts.push(`📱 ${contactInfo.mobile}`);
        if (contactInfo.linkedin)
            parts.push(`💼 [LinkedIn](${contactInfo.linkedin})`);
        if (contactInfo.twitter) parts.push(`🐦 [Twitter](${contactInfo.twitter})`);

        return parts.length > 0
            ? `## <div align="center">${user.fullName}</div>
            \n\n<div align="center">\n\n${parts.join(" | ")}\n\n</div>`
            : "";


    };

    const getCombinedContent = () => {
        const { summary, skills, experience, education, projects } = formValues;
        return [
            getContactMarkdown(),
            summary && `## Professional Summary\n\n${summary}`,
            skills && `## Skills\n\n${skills}`,
            entriesToMarkdown(experience, "Work Experience"),
            entriesToMarkdown(education, "Education"),
            entriesToMarkdown(projects, "Projects"),

        ]
        .filter(Boolean)
        .join("\n\n");

    };

    const onSubmit = async (data) => { };

    const generatePDF = async () => {
    setIsGenerating(true);
    try {
        console.log("PDF generation is disabled.");
    } catch (error) {
        console.error("Failed to generate PDF", error);
    } finally {
        setIsGenerating(false);
    }
};


    return (
        <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter 
               text-transparent bg-clip-text 
               bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 
               pb-2 pr-2">
                    Resume Builder
                </h1>
                <div className="space-x-2">
                    <Button variant="destructive">
                        <Save className="h-4 w-4" />
                        Save
                    </Button>

                    <Button  onClick={generatePDF} disabled={isGenerating}>
                        {isGenerating ?(
                            <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Generating PDF...
                            </>
                        ) : (

                            <>
                            <Download className="h-4 w-4" />
                            Download PDF
                            </>
                        )}
                        
                    </Button>
                </div>
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                    <TabsTrigger value="edit">Form</TabsTrigger>
                    <TabsTrigger value="preview">Markdown</TabsTrigger>
                </TabsList>
                <TabsContent value="edit">
                    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Contact Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <Input
                                        {...register("contactInfo.email")}
                                        type="email"
                                        placeholder="your@email.com"
                                        error={errors.contactInfo?.email}
                                    />
                                    {errors.contactInfo?.email && (
                                        <p className="text-red-500 text-sm">
                                            {errors.contactInfo.email.message}
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Mobile Number</label>
                                    <Input
                                        {...register("contactInfo.mobile")}
                                        type="tel"
                                        placeholder="+1 123 456 78900"
                                        error={errors.contactInfo?.mobile}
                                    />
                                    {errors.contactInfo?.mobile && (
                                        <p className="text-red-500 text-sm">
                                            {errors.contactInfo.mobile.message}
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">LinkedIn URL</label>
                                    <Input
                                        {...register("contactInfo.linkedin")}
                                        type="url"
                                        placeholder="https://linkedin.com/in/your-profile"
                                        error={errors.contactInfo?.linkedin}
                                    />
                                    {errors.contactInfo?.linkedin && (
                                        <p className="text-red-500 text-sm">
                                            {errors.contactInfo.linkedin.message}
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">X profile</label>
                                    <Input
                                        {...register("contactInfo.twitter")}
                                        type="url"
                                        placeholder="https://twitter.com/your-profile"
                                        error={errors.contactInfo?.twitter}
                                    />
                                    {errors.contactInfo?.twitter && (
                                        <p className="text-red-500 text-sm">
                                            {errors.contactInfo.twitter.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Professional Summary</h3>
                            <Controller
                                control={control}
                                name="summary"
                                render={({ field }) => (
                                    <Textarea
                                        {...field}
                                        className="h-32"
                                        placeholder="A brief summary about yourself"
                                        error={errors.summary}
                                    />
                                )}
                            />
                            {errors.summary && (
                                <p className="text-red-500 text-sm">{errors.summary.message}</p>
                            )}
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Skills</h3>
                            <Controller
                                control={control}
                                name="skills"
                                render={({ field }) => (
                                    <Textarea
                                        {...field}
                                        className="h-32"
                                        placeholder="List your skills here ......"
                                        error={errors.skills}
                                    />
                                )}
                            />
                            {errors.summary && (
                                <p className="text-red-500 text-sm">{errors.skills.message}</p>
                            )}
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Work Experience</h3>
                            <Controller
                                control={control}
                                name="experience"
                                render={({ field }) => (
                                    <EntryForm
                                        type="experience"
                                        entries={field.value}
                                        onChange={field.onChange}
                                    />


                                )}
                            />
                            {errors.experience && (
                                <p className="text-red-500 text-sm">{errors.experience.message}</p>
                            )}
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Education</h3>
                            <Controller
                                control={control}
                                name="education"
                                render={({ field }) => (
                                    <EntryForm
                                        type="eduation"
                                        entries={field.value}
                                        onChange={field.onChange}
                                    />

                                )}
                            />
                            {errors.education && (
                                <p className="text-red-500 text-sm">{errors.education.message}</p>
                            )}
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Projects</h3>
                            <Controller
                                control={control}
                                name="projects"
                                render={({ field }) => (
                                    <EntryForm
                                        type="projects"
                                        entries={field.value}
                                        onChange={field.onChange}
                                    />

                                )}
                            />
                            {errors.projects && (
                                <p className="text-red-500 text-sm">{errors.projects.message}</p>
                            )}
                        </div>
                    </form>

                </TabsContent>
                <TabsContent value="preview">
                    <Button
                        variant="link"
                        type="button"
                        className="mb-2"
                        onClick={() => setResumeMode(resumeMode === "preview" ? "edit" : "preview")}
                    >
                        {resumeMode === "preview" ? (
                            <>
                                <Edit className="h-4 w-4" />
                                Edit Resume
                            </>
                        ) : (
                            <>
                                <Monitor className="h-4 w-4" />
                                Show Preview
                            </>
                        )}
                    </Button>
                    {resumeMode !== "preview" && (
                        <div className="flex p-3 gap-2 items-center border-2 border-yellow-600 text-yellow-600 rounded mb-2">
                            <AlertTriangle className="h-5 w-5" />
                            <span className="text-sm>">
                                You will lose edited markdown if you update the form data.
                            </span>
                        </div>
                    )}
                    <div className="border rounded-lg">
                         <MDEditor
                            value={previewContent}
                            onChange={setPreviewContent}
                            height={800}
                            preview={resumeMode}
                            />
                    </div>
                    <div className="hidden">
                        <div id="resume-pdf">
                            <MDEditor.Markdown
                                source={previewContent}
                                style={{ 
                                    background: "white",
                                    color: "black",

                                }}
                            />


                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default ResumeBuilder