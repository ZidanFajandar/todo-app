import { archiveTaskAction } from "@/app/actions";

interface ArchiveButtonProps {
  id: number;
}

export default function ArchiveButton({ id }: ArchiveButtonProps) {
  return (
    <form action={archiveTaskAction}>
      <input type="hidden" name="id" value={id} />
      <button type="submit">Archive</button>
    </form>
  );
}