import {
  Avatar as ChakraAvatar,
  AvatarGroup as ChakraAvatarGroup,
  AvatarProps as ChakraAvatarProps,
} from "@chakra-ui/react"
import * as React from "react"

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export interface AvatarProps extends ChakraAvatarProps {
  name?: string
  src?: string
  srcSet?: string
  loading?: ImageProps["loading"]
  icon?: React.ReactElement
  fallback?: React.ReactNode
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(props, ref) {
    const { name, src, srcSet, loading, icon, fallback, children, ...rest } =
      props
    return (
      <ChakraAvatar ref={ref} {...rest}>
        {src ? (
          <img src={src} srcSet={srcSet} loading={loading} alt={name} />
        ) : (
          icon || fallback
        )}
        {children}
      </ChakraAvatar>
    )
  },
)

export const AvatarGroup = ChakraAvatarGroup
