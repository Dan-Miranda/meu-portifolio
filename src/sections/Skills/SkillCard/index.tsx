import { As, BackgroundProps, Box, Icon, Text } from '@chakra-ui/react'

interface IProps {
  IconSkill: As<any>,
  color: BackgroundProps['backgroundColor']
  level: string,
  name: string,
  description: string | Array<string>
}

export function SkillCard(props: IProps) {
  const { IconSkill, color, level, name, description } = props

  return (
    <Box
      width="100%"
      height="fit-content"
      paddingY="1rem"
      paddingX="0.5rem"
      backgroundColor={color}
      borderRadius="0.5rem"
      marginY="0.5rem"
    >
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          width="100%"
          alignItems="center"
        >
          <Icon
            as={IconSkill}
            fontSize="3rem"
            marginRight="1rem"
          />
          <Text fontWeight="bold">{name}</Text>
        </Box>
      </Box>
      <Box padding="1rem">
        <Text marginY="1rem">
          Nível: <Text fontWeight="bold" as="span">{level}</Text>
        </Text>
        <Text>{description}</Text>
      </Box>
    </Box>
  )
}
