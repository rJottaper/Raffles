import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAllRaffles = async () => {
  try {
    const raffles = await AsyncStorage.getItem('raffles');
    return raffles ? JSON.parse(raffles) : [];
  } catch (e) {
    console.log(e);
  };
};

export const saveRaffle = async (raffle) => {
  try {
    const rawRaffles = await AsyncStorage.getItem('raffles');
    const raffles = rawRaffles ? JSON.parse(rawRaffles) : [];
    raffles.push(raffle);
    await AsyncStorage.setItem('raffles', JSON.stringify(raffles));
    return true;
  } catch (e) {
    console.log(e);
  };
};