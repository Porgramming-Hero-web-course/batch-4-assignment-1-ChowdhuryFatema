

interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = (profile: Profile, updatedProfile: Partial<Profile>) => {
    return {...profile, ...updatedProfile}
}
