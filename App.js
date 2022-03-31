import React from "react";
import {
  Button,
  View,
  Pressable,
  Image,
  Icon,
  Box,
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  ZStack,
  Code,
  ScrollView,
  Checkbox,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Entypo } from "@native-base/icons";
import { SafeAreaView } from "react-native-safe-area-context";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
const colors = {
  primary: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
  },
};
export const spacing = {
  px: 1,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
  40: 160,
  48: 192,
  56: 224,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <SafeAreaView>
          <Center
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}
            px={4}
            py={5}
            flex={1}
          >
            <VStack space={5} alignItems="center">
              <NativeBaseIcon />
              <Heading size="lg">Welcome to NativeBase</Heading>
              <HStack space={2} alignItems="center">
                <Text>Edit</Text>
                <Code>App.js</Code>
                <Text>and save to reload.</Text>
              </HStack>
              <Link href="https://docs.nativebase.io" isExternal>
                <Text color="primary.500" underline fontSize={"xl"}>
                  Learn NativeBase
                </Text>
              </Link>
              <Icon as={Entypo} name="user"></Icon>
              <Text>
                The above icon demonstrates the usage of Icons in NativeBase
              </Text>
              <ToggleDarkMode py="10" />
            </VStack>
            <Example py="10" />
            <Text px="4" py="10">
              The above Example demonstrates the usage of utility props
              alongwith VStack , HStack components. This approach allows us to
              style components without using StyleSheet API. Apart from
              productivity boost and saving time there are other benefits by
              styling components using utility props. No need to name styles
              anymore, no need to define an object and think about naming them.
            </Text>
            <Text>* UTILITY PROPS SPECIFICITY*</Text>
            <Box mt="4" bg="primary.500" px="20" py="5">
              <Text color="white" fontSize="xl">
                This is created using Design Tokens. mt="24" and
                bg="primary.500" are the customisable tokens
              </Text>
            </Box>
            <Pressable
              _pressed={{ bg: "primary.800" }}
              bg="primary.600"
              py="2"
              rounded="sm"
              px="3"
              mt="5"
              alignSelf="center"
            >
              <Text textTransform="uppercase" fontWeight="bold" color="white">
                When Button is Pressed
              </Text>
            </Pressable>
            <Text py={3}>Hover overrides Press</Text>
            <BreakpointExample px="20" />
            <Link
              py="5"
              href="https://docs.nativebase.io/utility-props#h2-style-props"
            >
              Shortcuts(Props)
            </Link>
            <Text>
              NativeBase factory is a function that converts non-nativebase
              components to nativebase enabled components so you can pass style
              props to them. . import factory from 'native-base';
            </Text>
            <Box mt="4" bg="secondary.500" px="20" py="5">
              <Text color="white" fontSize="xl">
                <Link href="https://docs.nativebase.io/default-theme">
                  ExtendTheme
                </Link>{" "}
                Used to customize components.
              </Text>
            </Box>
            <Box mt="4" bg="red.500" px="20" py="5">
              <Text color="white" fontSize="xl">
                <Link href="https://docs.nativebase.io/dark-mode">
                  useColorModeValue
                </Link>{" "}
                Used to togle dark mode.
              </Text>
            </Box>
            <Box mt="4" bg="orange.500" px="20" py="5">
              <Text color="white" fontSize="xl">
                <Link href="">useBreakPointValue</Link> Used to provide break
                point values used for responsiveness of the page.
              </Text>
            </Box>
            <Box mt="4" bg="green.500" px="20" py="5">
              <Text color="white" fontSize="xl">
                UseTheme, useToken , useContrast, useColorMode etc..
                <Link href="https://docs.nativebase.io/theme">Themes</Link>
              </Text>
            </Box>
            <Text py="15" fontWeight="bold" fontSize={30}>
              COMPONENTS
            </Text>
            <Box
              my="10"
              p="20"
              bg="primary.500"
              _text={{
                fontSize: "md",
                fontWeight: "medium",
                color: "warmGray.50",
                letterSpacing: "lg",
              }}
              shadow={2}
            >
              This is a Box
            </Box>
            <Center
              bg="primary.400"
              _text={{
                color: "white",
                fontWeight: "bold",
              }}
              height={200}
              width={{
                base: 200,
                lg: 250,
              }}
            >
              This is the Center Square and Circle automatically centers their
              children.
            </Center>
            <Text paddingTop={20}>H STACK</Text>
            <HStack space={3} justifyContent="center">
              <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
              <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
              <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
            </HStack>
            ;<Text paddingTop={20}>V STACK</Text>
            <VStack space={4} alignItems="center">
              <Center w="40" h="20" bg="indigo.300" rounded="md" shadow={3} />
              <Center w="40" h="20" bg="indigo.500" rounded="md" shadow={3} />
              <Center w="40" h="20" bg="indigo.700" rounded="md" shadow={3} />
            </VStack>
            <Text paddingTop={20}>Z STACK</Text>
            <Center h="40">
              <Box mt="-32">
                <ZStack mt="3" ml={-50}>
                  <Box bg="primary.700" size="20" rounded="lg" shadow={3} />
                  <Box
                    bg="primary.500"
                    mt="5"
                    ml="5"
                    size="20"
                    rounded="lg"
                    shadow={5}
                  />
                  <Box
                    bg="primary.300"
                    mt="10"
                    ml="10"
                    size="20"
                    rounded="lg"
                    shadow={7}
                  />
                </ZStack>
              </Box>
            </Center>
            <Text paddingTop={20}>Button</Text>
            <Box alignItems="center">
      <Button >Click Me</Button>
    </Box>
    <HStack space={6}>
      <Checkbox shadow={2} my={10} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked>
        I accept the terms and conditions
      </Checkbox>
    </HStack>
    <VStack space={1} alignItems="center">
      <Text fontSize="xs">xs</Text>
      <Text fontSize="sm">sm</Text>
      <Text fontSize="md">md</Text>
      <Text fontSize="lg">lg</Text>
      <Text fontSize="xl">xl</Text>
      <Text fontSize="2xl">2xl</Text>
      <Text fontSize="3xl">3xl</Text>
      <Text fontSize="4xl">4xl</Text>
      <Text fontSize="5xl">5xl</Text>
      <Text fontSize="6xl">6xl</Text>
    </VStack>
            
          </Center>
        </SafeAreaView>
      </ScrollView>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

function BreakpointExample() {
  return (
    <Center
      bg="emerald.400"
      _text={{
        color: "white",
      }}
      rounded="xl"
      w={[72, 96, 120]}
      h={24}
      px={10}
    >
      This is a box.This represents responsiveness of native base components
      using an array
    </Center>
  );
}
function Example() {
  return (
    <NativeBaseProvider>
      <Box
        bg="primary.600"
        py="4"
        px="3"
        rounded="md"
        width={375}
        maxWidth="100%"
      >
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between">
            <VStack space="2">
              <Text fontSize="sm" color="white">
                Today @ 9PM
              </Text>
              <Text color="white" fontSize="xl">
                Let's talk about avatar!
              </Text>
            </VStack>
            <Pressable
              rounded="xs"
              bg="primary.400"
              alignSelf="flex-start"
              py="1"
              px="3"
            >
              <Text
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                color="white"
              >
                Remind me
              </Text>
            </Pressable>
          </Box>
          <Image
            source={{
              uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
            }}
            alt="Aang flying and surrounded by clouds"
            height="100"
            rounded="full"
            width="100"
          />
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}
