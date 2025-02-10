import RequestsList from "../features/requests/RequestsList";
import RequestForm from "../features/requests/RequestForm";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { useDarkMode } from "../contexts/DarkModeContext";

function RequestsPage() {
  const { isDarkMode } = useDarkMode();

  return (
    <div>
      <div>
        <Modal>
          <Modal.Open opens="addRequest">
            <Button additionalStyles="flex items-center justify-center gap-2 py-2 px-6">
              {isDarkMode ? (
                <img src="/icons/add-envelope-dark-icon.svg" className="w-5" />
              ) : (
                <img src="/icons/add-envelope-icon.svg" className="w-5" />
              )}
              <span>ارسال درخواست</span>
            </Button>
          </Modal.Open>
          <Modal.Window name="addRequest">
            <RequestForm
              title="فرم زیر را تکمیل کنید."
              requestOperation="add"
            />
          </Modal.Window>
        </Modal>
      </div>
      <RequestsList />
    </div>
  );
}

export default RequestsPage;
