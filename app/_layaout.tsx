import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="onboarding" />
        </Stack>
    );
}
export default RootLayout;