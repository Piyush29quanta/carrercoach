import { getResume } from "@/actions/resume";
import ResumeBuilder from "./_component/resume-builder";

export default async function ResumePage() {
    const resume = await getResume();
  
    return (
      <div className="container w-full mx-auto px-6 py-6">
        <ResumeBuilder initialContent={resume?.content} />
      </div>
    );
  }