import { AuthProvider, useAuth } from "@/providers/auth-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Redirect, Slot } from "expo-router";

export default function AppLayout() {
  // const { loading, isLogged } = useGlobalContext();
  const queryClient = new QueryClient();
  const { isAuthenticated, user } = useAuth();

  // if (loading) {
  //   return (
  //     <SafeAreaView className="bg-white h-full flex justify-center items-center">
  //       <ActivityIndicator className="text-primary-300" size="large" />
  //     </SafeAreaView>
  //   );
  // }

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </QueryClientProvider>
  );
}
