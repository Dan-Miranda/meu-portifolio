import { ArrowDownIcon } from '@chakra-ui/icons'
import { Button, Text } from '@chakra-ui/react'
import { scrollToSection } from '../../utils/functions'

interface IProps {
  sectionId: string
}

export function WhatDoIknowHowDoButton({ sectionId }: IProps) {
  return (
    <Button
        onClick={() => scrollToSection(sectionId)}
        variant="outline"
        leftIcon={<ArrowDownIcon />}
        marginY="1rem"
        position="absolute"
        bottom="0"
        color="white"
        _focus={{
          borderColor: 'purple.400'
        }}
        _hover={{
          color: 'purple.400',
          backgroundColor: 'inherit'
        }}
        _active={{
          backgroundColor: 'initial',
          color: 'inherit'
        }}
      >
        <Text>O que eu sei fazer ?</Text>
      </Button>
  )
}
