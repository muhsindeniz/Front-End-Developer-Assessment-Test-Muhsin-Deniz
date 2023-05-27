import { Box, Text } from "@chakra-ui/react"
import classNames from "classnames"
import React, { useState } from "react"

import styles from "./styles.module.css"
import { ColorVariantProps, Variant } from "./types"

const ColorVariant: React.FC<ColorVariantProps> = ({ colorVariants, onChange }) => {
  const [activeVariant, setActiveVariant] = useState<string | null>(null)

  const handleClick = (variant: Variant) => {
    setActiveVariant(variant.value)
    onChange(variant)
  }

  return (
    <Box className={styles.container}>
      {colorVariants &&
        colorVariants.map((variant) => (
          <button
            className={classNames(
              styles.variant,
              activeVariant === variant.value ? styles.isActive : null
            )}
            key={variant.value}
            onClick={() => handleClick(variant)}
          >
            <Text
              className={styles.variantColor}
              style={{ backgroundColor: variant.color, color: variant.color }}
            ></Text>
            {variant.text && <Text className={styles.variantTitle}>{variant.text}</Text>}
          </button>
        ))}
    </Box>
  )
}

export default ColorVariant
