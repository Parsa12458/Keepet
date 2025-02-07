import RequestsList from "../features/requests/RequestsList";
import RequestForm from "../features/requests/RequestForm";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

function RequestsPage() {
  return (
    <div>
      <div>
        <Modal>
          <Modal.Open opens="addRequest">
            <Button additionalStyles="flex items-center justify-center gap-2 py-2 px-6">
              <img src="/icons/add-envelope-icon.svg" className="w-5" />
              <span>افزودن درخواست</span>
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
