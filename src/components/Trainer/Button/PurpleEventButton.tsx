import { styled } from "styled-components";
import Image from "next/image";
import registerIcon from "/public/Trainer/plusCircleIcon.png";

interface EventButtonProps {
  event: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isIconVisible: boolean;
  message: string;
}

const EventButton = styled.button`
  width: 100%;
  margin: 0 auto;
  padding: 1.75rem 0;
  border-radius: 0.5rem;
  background-color: var(--purple50);
  text-align: center;
  font-weight: 500;
  color: var(--font-secondary);
  font-size: var(--font-m);
`;

const PlusIcon = styled(Image)`
  display: block;
  margin: 0 auto;
  margin-bottom: 0.44rem;
`;

export const PurpleEventButton = ({
  event,
  isIconVisible,
  message,
}: EventButtonProps) => {
  return (
    <>
      <EventButton onClick={event}>
        {isIconVisible && (
          <PlusIcon src={registerIcon} alt="+ 아이콘" width="30" height="30" />
        )}
        <div>{message}</div>
      </EventButton>
    </>
  );
};
