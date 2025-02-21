import prisma from "@/prisma/client";
// import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
// import "@/app/issues/_components/IssueForm";
import IssueForm from "@/app/issues/_components/IssueForm";
// import IssueFormSkeleton from "./loading";

// const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
//   ssr: false,
//   loading: () => <IssueFormSkeleton />,
// });

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditIssuePage(props: Props) {
  const params = await props.params;
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
}
