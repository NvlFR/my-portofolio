import React, { useState } from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Stack,
  Group,
  Box,
  Center,
  Paper,
} from "@mantine/core";
import { IconWallet } from "@tabler/icons-react";

// Geometric Logo Component
const GeometricLogo = () => {};

export default function WelcomePage() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  return (
    <Box
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Group justify="space-between" p="md">
        <GeometricLogo />

        <Button
          variant="filled"
          color="teal"
          textAlign="left"
          leftSection={<IconWallet size={16} />}
        >
          Connect Wallet
        </Button>
      </Group>

      {/* Main Content */}
      <Container size="md" style={{ flex: 1 }}>
        <Center style={{ minHeight: "70vh" }}>
          <Stack align="center" gap="xl">
            <Stack align="center" gap="md">
              <Title
                order={1}
                size="3rem"
                style={{
                  color: "#2c5530",
                  fontWeight: 400,
                  textAlign: "center",
                  fontFamily: "serif",
                }}
              >
                Welcome To MyPortofolio
              </Title>

              <Title
                order={2}
                size="1.5rem"
                style={{
                  color: "#2c5530",
                  fontWeight: 300,
                  textAlign: "center",
                  fontFamily: "serif",
                }}
              >
                Noval Faturrahman
              </Title>
            </Stack>

            <Text
              size="lg"
              style={{
                color: "#555",
                textAlign: "center",
                maxWidth: "500px",
                lineHeight: 1.6,
              }}
            >
              Connect your wallet to be able to access my complete portofolio
            </Text>

            {isConnected && (
              <Paper
                p="xl"
                radius="md"
                shadow="sm"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  textAlign: "center",
                }}
              >
                <Title order={3} color="teal" mb="md">
                  🎉 Wallet Connected Successfully!
                </Title>
                <Text>
                  You now have access to the complete portfolio. Explore
                  projects, skills, and achievements.
                </Text>
              </Paper>
            )}
          </Stack>
        </Center>
      </Container>

      {/* Footer */}
      <Box
        style={{
          background: "rgba(44, 85, 48, 0.9)",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: "14px",
          }}
        >
          can't connect? <span style={{ color: "#4fd1c7" }}>MyPortofolio</span>
        </Text>
      </Box>
    </Box>
  );
}
