export type KeyedObject<T> = T & { _key: string };

export type Field = {
  _type: string;
};

export type KeyedField = KeyedObject<Field>;

export type IconType = 'email' | 'instagram' | 'youtube' | 'tiktok' | 'facebook';
