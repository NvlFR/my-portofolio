import React from 'react';
import { Button, Box, rem, Flex } from '@mantine/core';
import { IconWallet } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { float } from './animations';
import { useMediaQuery } from '@mantine/hooks';

const WelcomeHeader = () => {
    // Mendeteksi ukuran layar
    const isMobile = useMediaQuery('(max-width: 576px)');
    const isTablet = useMediaQuery('(max-width: 992px)');

    // Menentukan ukuran berdasarkan device
    const logoSize = isMobile ? 32 : isTablet ? 40 : 48;
    const buttonSize = isMobile ? 'sm' : 'md';
    const iconSize = isMobile ? 16 : 20;
    const padding = isMobile ? 'md' : isTablet ? 'lg' : 'xl';

    return (
        <Flex
            justify="space-between"
            align="center"
            p={padding}
            gap="md"
        >
            <motion.div
                animate="animate"
                variants={float}
            >
                <Box
                    component="img"
                    src="/src/assets/blockchain.png"
                    alt="Blockchain Logo"
                    w={rem(logoSize)}
                    h={rem(logoSize)}
                    style={{
                        maxWidth: '100%',
                        height: 'auto'
                    }}
                />
            </motion.div>

            <Button
                leftSection={<IconWallet size={iconSize} />}
                size={buttonSize}
                radius="md"
                color="#429988"
                styles={{
                    root: {
                        backgroundColor: '#429988',
                        '&:hover': {
                            backgroundColor: '#3b8a7d',
                            transform: 'scale(1.05)',
                            '& svg': {
                                transform: 'rotate(15deg)'
                            }
                        },
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    },
                    section: {
                        transition: 'transform 0.3s ease'
                    }
                }}
            >
                Connect Wallet
            </Button>
        </Flex>
    );
};

export default WelcomeHeader;