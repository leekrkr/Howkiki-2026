import {
  ModalContainer,
  Modal,
  ModalContent,
  ModalTitle,
  ModalText,
  BtnContainer,
  CancelButton,
  ConfirmButton,
} from "../../styles/components/chatModal.module";

export default function ChatModal({
  isOpen,
  title,
  message,
  confirmText = "확인",
  cancelText,
  type = "default",
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <ModalContent>
          {title && <ModalTitle $type={type}>{title}</ModalTitle>}
          <ModalText>{message}</ModalText>
        </ModalContent>
        <BtnContainer>
          {cancelText && (
            <CancelButton onClick={onCancel}>{cancelText}</CancelButton>
          )}
          <ConfirmButton onClick={onConfirm}>{confirmText}</ConfirmButton>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
