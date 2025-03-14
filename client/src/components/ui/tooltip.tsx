import { Tooltip as ChakraTooltip, Portal, TooltipProps as ChakraTooltipProps } from "@chakra-ui/react"
import * as React from "react"

export interface TooltipProps extends ChakraTooltipProps {
  showArrow?: boolean
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
  content: string | undefined
  contentProps?: React.ComponentProps<typeof ChakraTooltip>
  disabled?: boolean
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const {
      showArrow,
      children,
      disabled,
      content,
      contentProps,
      portalRef,
      ...rest
    } = props

    if (disabled) return children

    return (
      <ChakraTooltip {...rest}>
        <div>{children}</div>
        <Portal containerRef={portalRef}>
          <div ref={ref} {...(contentProps ? (contentProps as React.HTMLAttributes<HTMLDivElement>) : {})}>
            {showArrow && (
              <div className="tooltip-arrow" />
            )}
            {content}
          </div>
        </Portal>
      </ChakraTooltip>
    )
  },
)
