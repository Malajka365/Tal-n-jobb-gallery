export interface Profile {
  id: string;
  username: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Video {
  id: string;
  user_id: string;
  title: string;
  description: string;
  youtube_id: string;
  category: string;
  tags: { [key: string]: string[] };
  created_at: string;
  updated_at: string;
}

export interface TagGroup {
  id: string;
  user_id: string;
  name: string;
  tags: string[];
  category: string;
  created_at: string;
  updated_at: string;
}

export type Tables = {
  profiles: Profile;
  videos: Video;
  tag_groups: TagGroup;
};