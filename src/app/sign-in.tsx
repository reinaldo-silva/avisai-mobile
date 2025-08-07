import Button from "@/components/Button";
import Divider from "@/components/Divider";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { Logo } from "@/components/Logo";
import TextBase from "@/components/TextBase";
import { useSession } from "@/ctx";
import { clsx } from "clsx";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";

export default function SignIn() {
  const { signIn } = useSession();

  return (
    <KeyboardAvoidingView
      className={clsx("flex-1 justify-center px-8 bg-slate-950")}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar barStyle={"light-content"} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className="flex-1 justify-center gap-4">
          <Logo />
          <Heading className="text-center">Bem vindo ao AvisAÍ</Heading>
          <TextBase className="text-center mb-5">
            Receba avisos quando seus pedidos estiverem prontos
          </TextBase>
          <Input placeholder="Seu e-mail" />
          <Input placeholder="Sua senha" type="password" />
          <Button title="Entrar" onPress={signIn} />
          <Button title="Esqueci minha senha" variant="link" />
          <Divider label="Não tem conta?" />
          <Button title="Criar conta" variant="outline" />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
