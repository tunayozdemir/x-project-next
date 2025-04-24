import React from 'react'
import { Card as AntCard } from 'antd'
import Image from 'next/image'

export interface CardPropsType {
  alt?: string
  src?: string
  width?: number
  height?: number
  title?: string
  description?: string
  imageUrl?: string
  style?: React.CSSProperties
  className?: string
}

const defaultProps: Partial<CardPropsType> = {
  alt: 'example',
  src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  width: 200,
  height: 100,
  title: 'Card title',
  description: 'This is the description',
  style: { width: 240 },
  className:"rounded-xl shadow-xl transition-transform hover:scale-105",
}
const Card: React.FC<CardPropsType> = ({

  alt = defaultProps.alt,
  src = defaultProps.src,
  width = defaultProps.width,
  height = defaultProps.height,
  title = defaultProps.title,
  description = defaultProps.description,
  style = defaultProps.style,
  className = defaultProps.className,

}) => {
  return (
    <AntCard
      className={className}
      hoverable
      style={style}
      title={title}
      cover={
        src ? (
          <Image
            alt={alt || ''}
            src={src}
            width={width}
            height={height}
          />
        ) : null
      }
    >
      {description && <p>{description}</p>}
    </AntCard>
  )

}

export default Card
