import React, {useEffect, useState} from "react";
import FooterWide from "../components/FooterWide.jsx";
import Navbar from "../components/Navbar.jsx";
import {GET_TOKEN, PROFILE_UPDATE_ADDRESS_URL, PROFILE_UPDATE_URL, PROFILE_URL} from "../utils/constants.jsx";
import {useAuth} from "../utils/AuthContext.jsx";

const field =
    "h-11 w-full rounded-xl border border-neutral-300 bg-white px-3 outline-none focus:border-neutral-500 focus:ring-4 focus:ring-neutral-900/5";

export default function AccountPage() {
    const [name, setName] = useState("Ramesh");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("ramesh@gmail.com");
    const [altName, setAltName] = useState("");
    const [altPhone, setAltPhone] = useState("");
    const [userData, setUserData] = useState({});

    const [profile, setProfile] = useState({});

    const [address, setAddress] = useState({});

    const {token, user: userAuth, login, logout} = useAuth();

    useEffect(() => {
        if (token) {
            getProfile();
        }
    }, [token]);

    const getProfile = () => {
        fetch(PROFILE_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${GET_TOKEN()}`,
            },
        }).then(res => {
            console.log(res);
            if (!res.ok) {
                throw new Error("Failed to fetch user details");
            }
            return res.json();
        }).then(data => {
            console.log("user details", data);
            setUserData(data);
            setProfile(data?.profile)
            setAddress(data?.addresses?.[0]);
            console.log("address", data?.addresses?.[0]);
        }).catch(error => {
            console.error(error);
        })
    }

    const savePersonalInfo = () => {
        console.log("save profile", profile);
        fetch(PROFILE_UPDATE_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + GET_TOKEN(),
            },
            body: JSON.stringify(profile),
        }).then(res => {
            if (!res.ok) {
                throw new Error("Failed to update profile details");
            }
            getProfile();
        }).catch(error => {
            console.error(error);
        })
    }

    const saveAddress = () => {
        console.log("save address", address);
        fetch(PROFILE_UPDATE_ADDRESS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + GET_TOKEN(),
            },
            body: JSON.stringify(address),
        }).then(res => {
            if (!res.ok) {
                throw new Error("Failed to update profile details");
            }
            getProfile();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <>
            <Navbar/>
            <div className="bg-neutral-50 text-neutral-900 min-h-dvh">
                <main className="container-px py-6 max-w-4xl">
                    <div className="text-sm font-semibold text-neutral-700 mb-3 text-xl border-b border-neutral-200">
                        Account Details
                    </div>

                    <section
                        className="bg-white rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)] p-4 md:p-5 flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-neutral-200 grid place-content-center text-2xl">
                            👤
                        </div>
                        <div className="min-w-0">
                            <div className="text-[18px] md:text-[20px] font-extrabold leading-tight">
                                {userData?.profile?.firstName} {userData?.profile?.lastName}
                            </div>
                        </div>
                    </section>

                    <details className="mt-4 bg-white rounded-2xl border border-neutral-200 overflow-hidden">
                        <summary
                            className="cursor-pointer select-none flex items-center justify-between px-4 md:px-5 h-12 font-semibold border-b border-neutral-200">
              <span className="inline-flex items-center gap-2">
                ⚙️ Personal Information
              </span>
                            <span className="text-[11px] rounded-md bg-yellow-100 text-yellow-800 px-2 py-[2px]">
                Incomplete
              </span>
                        </summary>

                        <div className="px-4 md:px-5 pb-5 pt-2">
                            <div className="flex gap-2">
                                <div className="mb-3 w-1/2">
                                    <label className="block text-sm font-medium mb-1">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            value={profile?.firstName}
                                            onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                                            placeholder="Ram"
                                            className={field}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 w-1/2">
                                    <label className="block text-sm font-medium mb-1">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            value={profile?.lastName}
                                            onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                                            placeholder="Raju"
                                            className={field}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2 mt-3">
                                <div className="mb-3 w-1/2">
                                    <label className="block text-sm font-medium mb-1">
                                        Government Id Type <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            value={profile?.govtIdType}
                                            onChange={(e) => setProfile({...profile, govtIdType: e.target.value})}
                                            placeholder="Aadhaar"
                                            className={field}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 w-1/2">
                                    <label className="block text-sm font-medium mb-1">
                                        Government Id Number <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            value={profile?.govtIdNumber}
                                            onChange={(e) => setProfile({...profile, govtIdNumber: e.target.value})}
                                            placeholder="8675-6574-5647"
                                            className={field}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2 mt-3">
                                <div className="mb-3 w-1/3">
                                    <label className="block text-sm font-medium mb-1">
                                        Date of Birth <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            value={profile?.dob}
                                            onChange={(e) => setProfile({...profile, dob: e.target.value})}
                                            className={field}
                                            type="date"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 w-2/3">
                                    <label className="block text-sm font-medium mb-1">
                                        Avatar URL <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            value={profile?.avatarUrl}
                                            onChange={(e) => setProfile({...profile, avatarUrl: e.target.value})}
                                            placeholder="https://url/image"
                                            className={field}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <button
                                    className="h-11 px-6 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold"
                                    onClick={savePersonalInfo}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </details>

                    <details className="mt-4 bg-white rounded-2xl border border-neutral-200 overflow-hidden ">
                        <summary
                            className="cursor-pointer select-none flex items-center justify-between px-4 md:px-5 h-12 font-semibold border-b border-neutral-200">
              <span className="inline-flex items-center gap-2">
                📩 Contact Details
              </span>
                            <span className="text-[11px] rounded-md bg-yellow-100 text-yellow-800 px-2 py-[2px]">
                Incomplete
              </span>
                        </summary>

                        <div className="px-4 md:px-5 pb-5 pt-2">
                            <div className="mb-3">
                                <label className="block text-sm font-medium mb-1">
                                    Phone <span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        value={"+91-" + userData?.user?.phoneNumber}
                                        readOnly
                                        className={field}
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    E-mail <span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        value={userData?.user?.email}
                                        readOnly
                                        className={field}
                                    />
                                </div>
                            </div>

                            <div className="border-t border-neutral-200 pt-4">
                                <div className="text-sm font-semibold mb-3">
                                    Alternate contact details
                                </div>
                                <div className="grid md:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-sm text-neutral-600 mb-1">
                                            Name
                                        </label>
                                        <input
                                            value={altName}
                                            onChange={(e) => setAltName(e.target.value)}
                                            className={field}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-neutral-600 mb-1">
                                            Phone
                                        </label>
                                        <input
                                            value={altPhone}
                                            onChange={(e) => setAltPhone(e.target.value)}
                                            className={field}
                                            placeholder="+xxxxxxxxxxxx"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </details>

                    <details className="mt-4 bg-white rounded-2xl border border-neutral-200 overflow-hidden">
                        <summary
                            className="cursor-pointer select-none flex items-center justify-between px-4 md:px-5 h-12 font-semibold border-b border-neutral-200">
                            <span className="inline-flex items-center gap-2">📍 Address</span>
                            <span className="text-[11px] rounded-md bg-yellow-100 text-yellow-800 px-2 py-[2px]">
                Incomplete
              </span>
                        </summary>
                        {/* collapsed content placeholder */}

                        <div className="px-4 md:px-5 pb-5 pt-2">
                            <div className="pt-4">
                                <div>
                                    <label className="block text-sm text-neutral-600 mb-1">
                                        Address Type
                                    </label>
                                    <input
                                        value={address?.label}
                                        onChange={(e) => setAddress({...address, label: e.target.value})}
                                        className={field}
                                        placeholder="home/office"
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-3">

                                    <div>
                                        <label className="block text-sm text-neutral-600 mb-1">
                                            line1
                                        </label>
                                        <input
                                            value={address?.line1}
                                            onChange={(e) => setAddress({...address, line1: e.target.value})}
                                            className={field}
                                            placeholder="line1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-neutral-600 mb-1">
                                            city
                                        </label>
                                        <input
                                            value={address?.city}
                                            onChange={(e) => setAddress({...address, city: e.target.value})}
                                            className={field}
                                            placeholder="city"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-neutral-600 mb-1">
                                            state
                                        </label>
                                        <input
                                            value={address?.state}
                                            onChange={(e) => setAddress({...address, state: e.target.value})}
                                            className={field}
                                            placeholder="state"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-neutral-600 mb-1">
                                            countryCode
                                        </label>
                                        <input
                                            value={address?.countryCode}
                                            onChange={(e) => setAddress({...address, countryCode: e.target.value})}
                                            className={field}
                                            placeholder="countryCode"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-neutral-600 mb-1">
                                            postalCode
                                        </label>
                                        <input
                                            value={address?.postalCode}
                                            onChange={(e) => setAddress({...address, postalCode: e.target.value})}
                                            className={field}
                                            placeholder="postalCode"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-neutral-600 mb-1">
                                            isDefault
                                        </label>
                                        <div className="py-2">
                                            <label className="mr-4">
                                                <input
                                                    type="radio"
                                                    name="yesNo"
                                                    value="yes"
                                                    // checked={address ?  address.default : true}
                                                    checked={address ? address.default : true}
                                                    onClick={(e) => {
                                                        setAddress({...address, default: true, isDefault: "TRUE"})

                                                    }}
                                                />
                                                Yes
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="yesNo"
                                                    value="no"
                                                    // checked={address ?  address.default : false}
                                                    checked={address ? !address.default : false}
                                                    onClick={(e) => {
                                                        setAddress({...address, default: false, isDefault: "FALSE"})
                                                    }}
                                                />
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <button
                                    className="h-11 px-6 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold"
                                    onClick={saveAddress}>
                                    Save
                                </button>
                            </div>

                        </div>
                    </details>

                    <div className="text-right text-sm mt-3">
                        <button className="text-white hover:bg-red-600 bg-red-500 p-3 rounded-xl">
                            Delete Account
                        </button>
                    </div>
                </main>
            </div>
            <FooterWide/>
        </>
    );
}
