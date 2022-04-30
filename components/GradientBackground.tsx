import { Box } from "@chakra-ui/react";

interface GradientBackgroundProps {
  color: string;
}

const GradientBackground = ({ color }: GradientBackgroundProps) => {
  return (
    <Box
      pos="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex={-100}
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    />
  );
};

export default GradientBackground;
