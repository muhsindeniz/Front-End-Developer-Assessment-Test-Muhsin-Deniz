import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react"
import { IoArrowBackOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

export interface ErrorElementProps {
  title: string
  description: string
  showNavigateBack?: boolean
}

const ErrorElement = ({ title, description, showNavigateBack = false }: ErrorElementProps) => {
  const navigate = useNavigate()

  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection={{
        base: "column-reverse",
        lg: "row",
      }}
      maxWidth="container.lg"
    >
      <Flex flexDirection="column" alignItems="center" gap={4}>
        <Heading size="4xl">{title}</Heading>
        <Text fontSize="2xl" textAlign="center" fontWeight="medium" lineHeight="shorter">
          {description}
        </Text>
        {showNavigateBack && (
          <Button
            colorScheme="black"
            onClick={() => navigate(-1)}
            leftIcon={<IoArrowBackOutline />}
          >
            Continue Shopping
          </Button>
        )}
      </Flex>
    </Container>
  )
}

export default ErrorElement
