import styled from "styled-components";

export const Img = styled.img`
  width: 30%;
  height: 100%;
  border-radius: 25%;
  object-fit: cover;
  overflow: hidden;
  opacity: 0.6;
  -webkit-transition: all 0.6s ease;
  -moz-transition: all 0.6s ease;
  transition: all.6s ease;
  &:hover {
    opacity: 0.9;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 70%;
    padding-bottom: 2rem;
  }
`;

export const AboutMeContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column-reverse;
  }
`;
export const AboutMeText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const Highlight = styled.span`
  color: white;
  font-weight: bold;
`;

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  background: #0f1624;
  padding: 0rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type {
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;
export const CarouselMobileScrollNode = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => (final ? `120%;` : `min-content`)};
  }
`;

export const CarouselItem = styled.div`
  background: #0f1624;
  border-radius: 3px;
  max-width: 196px;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 124px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: #0e131f;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;

    ${(props) =>
      props.active === props.index ? `opacity: 1` : `opacity: 0.5`};
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(
    121.57deg,
    #ffffff 10%,
    rgba(255, 255, 255, 0.66) 30.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;
export const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
  transform: ${(props) =>
    props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`;

export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;