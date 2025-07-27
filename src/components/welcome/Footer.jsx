import React from "react";
import { Text, Box } from '@mantine/core';
import { motion } from "framer-motion";
import { fadeIn } from "./animations";

const WelcomeFooter = () => {
    return (
        <Box bg="#429988" p="md" ta="center">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
                <Text
                    c="gray.2"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                    can't connect?{' '}
                    <Text
                        component="a"
                        href="#"
                        c="Black"
                        fw={600}
                        style={{
                            textDecoration: 'underline',
                            '&:hover': {
                                color: '#050505ff'
                            },
                            transition: 'color 0.3s ease'
                        }}
                    >
                        My Portofolio
                    </Text>
                </Text>
            </motion.div>
        </Box>
    );
};

export default WelcomeFooter;