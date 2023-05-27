import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import banner from "@/assets/images/banners/banner.jpg"
import ColorVariant from "@/components/ColorVariant"
import { Variant } from "@/components/ColorVariant/types"
import { productData } from "@/mock/products"

SwiperCore.use([Navigation])

const HomePage = () => {
  const onVariantChange = (e: Variant) => {
    console.log(e)
  }

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        lg: "repeat(auto-fit, minmax(50%, 1fr))",
      }}
    >
      <Box>
        <Image
          src={banner}
          height={{ base: "55vh", lg: "100vh" }}
          objectFit="cover"
          objectPosition="top"
          w="100%"
        />
      </Box>

      <Box
        mt={{
          base: "-25vh",
          lg: 0,
        }}
      >
        <Box
          padding={{
            base: "0 48px",
            lg: "96px 106px 0 120px",
          }}
        >
          <Text
            color={{
              base: "white",
              lg: "head-text",
            }}
            fontSize={{
              base: "20px",
              lg: "30px",
            }}
            fontFamily="avantBold"
            fontWeight={700}
            mb={{
              base: 4,
              lg: 3,
            }}
          >
            Everyday items, we have something to suit every occasion.
          </Text>
          <Text
            display={{
              base: "none",
              lg: "block",
            }}
            color={{
              base: "white",
              lg: "muted-text",
            }}
            fontFamily="light"
            fontSize={16}
            mb={8}
            lineHeight={6}
          >
            At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu
            proin leo gravida cursus.
          </Text>
          <Text
            as={Link}
            fontWeight="bold"
            lineHeight={4}
            borderBottomColor={{
              base: "white",
              lg: "black",
            }}
            borderBottomWidth={1}
            fontFamily="AvenirMedium"
            py={2}
            transition="linear .3s all"
            _hover={{
              color: "muted-text",
            }}
            color={{
              base: "white",
              lg: "muted-text",
            }}
          >
            Shop all everyday items
          </Text>
        </Box>
        <Box position="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={32}
            slidesPerView={2}
            navigation={true}
            allowTouchMove
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            className="product-slider--container"
          >
            {productData &&
              productData.map((product) => (
                <SwiperSlide key={product.id}>
                  <Image src={product.image} mb={4} loading="lazy" />
                  <Text colorScheme="head-text" fontSize={14} lineHeight={5} mb={1}>
                    {product.name}
                  </Text>
                  <Flex
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    fontFamily="AvenirLight"
                  >
                    <Text colorScheme="head-text" fontWeight={500} fontFamily="AvenirMedium">
                      €{product.price}
                    </Text>
                    <ColorVariant
                      colorVariants={product.colorsVariant}
                      onChange={onVariantChange}
                      value={"inner"}
                    />
                  </Flex>
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
      </Box>
    </Grid>
  )
}
export default HomePage
