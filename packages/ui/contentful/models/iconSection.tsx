import { StaticImageData } from 'next/image'
import styled from 'styled-components'

interface LongCardProps {
    image: StaticImageData;
    text: string;
}

interface LongCardSectionProps {
    cards: LongCardProps[]
}

