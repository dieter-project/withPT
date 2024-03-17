import styled from "styled-components";

export const Title = styled.div`
  text-align: center;
  font-size: 1.125rem;
  font-weight: var(--font-semibold);
  margin-bottom: 2.75rem;
`

export const ModalContainer = styled.div<{$full?: boolean;}>`
  position: fixed;
  bottom: -150vh;
  background-color: var(--white);
  width: 100%;
  left: 0;
  padding: 0 12px 12px;
  transition: bottom 0.3s ease-out;
  z-index: 150;
  
  .overlay {
    background-color: rgba(0, 0, 0, 0.55);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    display: none;
    z-index: 5;
  }

  .overlay {
    display: block;
  }

  .modal {
    width: 100%;
    height: ${props => props.$full ? "90vh" : "33.75rem"};
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: var(--white);
    padding: 0.75rem 0.75rem;
    animation: slideUp 0.3s ease-out;
    border-radius: 0.5rem 0.5rem 0 0;
    z-index: 10;

    > div:first-child {
      text-align: right;
    }
  }

  @keyframes slideUp {
    from {
      bottom: -100%;
    }
    to {
      bottom: 0;
    }
  }
  
`