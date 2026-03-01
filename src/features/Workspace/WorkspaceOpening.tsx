import { Button } from "@/components/ui";

const WorkspaceOpening = ({
  onClickOpening,
}: {
  onClickOpening: () => void;
}) => {
  return (
    <div className="flex justify-around">
      <div className="max-w-md m-4 mt-62 space-y-4">
        <h1 className="text-2xl text-center font-serif font-bold">
          Design your perfect workspace
        </h1>
        <p className="text-center font-serif">
          Select your desk, chair, and accessories. See your setup update
          instantly — and check out when you`re ready.
        </p>
        <div className="flex justify-center">
          <Button onClick={onClickOpening} label="Start Designing" />
        </div>
      </div>
    </div>
  );
};

export default WorkspaceOpening;
