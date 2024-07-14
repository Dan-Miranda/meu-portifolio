import { Divider, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { SiJava, SiReact, SiFlutter, SiNodedotjs } from 'react-icons/si'
import { HEADER_SIZE } from '../../utils/constants'
import { SkillCard } from './SkillCard'

export function Skills() {
  return (
    <Flex
      as="section"
      id="skills"
      width="100%"
      height="100%"
      direction="column"
      paddingY={HEADER_SIZE}
      paddingX="1rem"
      bgGradient="linear(to-t, gray.900, gray.700)"
    >

      <Heading as="h2" marginBottom="2rem">
        <Text as="span" color="purple.500">_</Text>skills
      </Heading>

      <Text >
        Abaixo estão algumas das tecnologias que tenho domínio, tanto no Front quanto no Backend.
      </Text>

      <Text marginY="1rem" fontWeight="bold">
        Frontend:
      </Text>

      <SimpleGrid
        columns={{
          base: 1,
          sm: 1,
          md: 2,
          lg: 3
        }}
        spacing="1rem"
      >
        <SkillCard
          IconSkill={SiReact}
          color="blue.400"
          name="ReactJS"
          level="Avançado"
          description=""
        />

        <SkillCard
          IconSkill={SiReact}
          color="cyan.400"
          name="React Native"
          level="Intermediário"
          description=""
        />

        <SkillCard
          IconSkill={SiFlutter}
          color="blue.600"
          name="Flutter"
          level="Básico"
          description=""
        />
      </SimpleGrid>

      <Divider marginY="1rem" orientation='horizontal' width="100%" height="1px" />

      <Text marginY="1rem" fontWeight="bold">Backend:</Text>

      <SimpleGrid
        columns={{
          base: 1,
          sm: 1,
          md: 2,
          lg: 3
        }}
        spacing="1rem"
      >
        <SkillCard
          IconSkill={SiNodedotjs}
          color="green.400"
          name="NodeJS"
          level="Intermediário"
          description=""
        />

        <SkillCard
          IconSkill={SiJava}
          color="red.400"
          name="Spring boot (Java)"
          level="Avançado"
          description=""
        />
      </SimpleGrid>

    </Flex>
  )
}
