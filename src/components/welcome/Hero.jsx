import React from "react"
import { Text, Title, Box, rem, Flex } from '@mantine/core';
import { motion } from "framer-motion";
import { fadeIn, bounce } from "./animations";


const WelcomeHero = () => {
    return (
        <Flex
            flex={1}
            align="center"
            justify="center"
            px="md"
            style={{ textAlign: 'center' }}
        >
            <Box maw={rem(800)} style={{ display: 'flex', flexDirection: 'column', gap: rem(20) }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <Title
                        order={1}
                        size={rem(48)}
                        style={{
                            fontFamily: '"Jacques Francois", serif',
                            color: '#429988'
                        }}
                    >
                        Welcome To MyPortofolio
                    </Title>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                    <Title
                        order={2}
                        size={rem(36)}
                        style={{
                            fontFamily: '"Jacques Francois", serif',
                            color: 'black'
                        }}
                    >
                        Noval Faturrahman
                    </Title>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                >
                    <Text
                        size="lg"
                        c="dimmed"
                        mt="md"
                        style={{ fontFamily: '"Poppins", sans-serif' }}
                    >
                        Connect your wallet to be able to access my complete portofolio
                    </Text>
                </motion.div>

                <motion.div
                    style={{ paddingTop: rem(32) }}
                    animate="animate"
                    variants={bounce}
                >

                </motion.div>
            </Box>
        </Flex>
    );
};

export default WelcomeHero;
