import { Button } from "@/components/buttons";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Index() {
  return (
    <div className="p-4">
      <div className="flex gap-4">
        <Button
          icon={<FontAwesomeIcon icon={faIcons} />}
          content="Button 1"
          processing={true}
        />
      </div>
    </div>
  );
}
