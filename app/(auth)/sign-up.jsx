import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from './../../components/CustomButton';
import { Link } from 'expo-router';

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: '',
  });
  const submit = () => {};
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full justify-center h-full px-4 my-6">
        <Image
          source={images.logo}
          resizeMode="contain"
          className="w-[115px] h-[35px]"
        />
        <Text className="text-white text-semibold mt-10 font-psemibold">
          Step in to Aura
        </Text>
        <FormField
          title="Username"
          value={form.username}
          handleChangeText={(e) => setForm({ ...form, username: e })}
          otherStyles="mt-7"
        />
        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
        />
        <CustomButton
          title="Sign Up"
          handlePress={submit}
          containerStyle="mt-7"
          isLoading={isSubmitting}
        />
        <View className="flex justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100 font-pregular">
            Already have an account?
          </Text>
          <Link
            href="/sign-in"
            className="text-lg font-psemibold text-secondary"
          >
            SignIn
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
