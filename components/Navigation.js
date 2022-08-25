import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Accordion from '@radix-ui/react-accordion';
import useWindowSize from 'hooks/useWindowSize';
import NavCalendarIcon from 'public/assets/icons/NavCalendarIcon';
import PlayButtonIcon from 'public/assets/icons/PlayButtonIcon';
import BellIcon from 'public/assets/icons/BellIcon'
import SparkleIcon from 'public/assets/icons/SparkleIcon'
import HeartSquareIcon from 'public/assets/icons/HeartSquareIcon';
import SupportUsIcon from 'public/assets/icons/SupportUsIcon';
import EarthDayIcon from 'public/assets/icons/EarthDayIcon';
import WhoWeServeIcon from 'public/assets/icons/WhoWeServeIcon';
import WhatWeDoIcon from 'public/assets/icons/WhatWeDoIcon';
import UpcomingEventsIcon from 'public/assets/icons/UpcomingEventsIcon';
import SponsorsIcon from 'public/assets/icons/SponsorsIcon';
import BoardIcon from 'public/assets/icons/BoardIcon';
import TeamIcon from 'public/assets/icons/TeamIcon';
import EnvProjectsIcon from 'public/assets/icons/EnvProjectsIcon';
import ComProjectsIcon from 'public/assets/icons/ComProjectsIcon';
import CulturalProjectsIcon from 'public/assets/icons/CulturalProjectsIcon';
import wordmark from 'public/assets/logo/logo-wordmark.png'
import logo from 'public/assets/logo/logo.png'

const NextLink = ({ href, ...props }) => {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <Link href={href} passHref>
            <NavigationMenu.Link active={isActive} {...props}></NavigationMenu.Link>
        </Link>
    );
};

export default function Test() {

    const windowSize = useWindowSize();

    if (windowSize !== 'undefined' && windowSize.width >= 1024) {
        return (
            <>
                <NavigationMenu.Root className="sticky top-0 z-50" orientation="vertical">
                    <NavigationMenu.List className="flex items-center justify-center bg-gray-50 px-6 py-2">
                        {/* hidden on small screens */}
                        <NavigationMenu.Item className="hidden md:block mr-auto">
                            <NextLink href="/">
                                <Image
                                    src={wordmark}
                                    className="h-12"
                                    alt=""
                                    width="200"
                                    height="47"
                                /></NextLink>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item className="mx-2">
                            <NavigationMenu.Trigger className="relative group inline-flex items-center rounded-md p-2 text-sm font-bold text-[#603913] hover:text-[#35200b] hover:text-opacity-90 focus-within:text-green-600 focus-within:hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                About
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="absolute overflow-hidden rounded-lg shadow-lg ring-1 ring-purple-500 ring-opacity-5 max-w-[320px]">
                                <div className="grid gap-8 bg-white p-7">
                                    <NextLink href="/about" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                        <Image
                                            className="h-12 w-12 mr-2"
                                            src={logo}
                                            alt=""
                                            width="35"
                                            height="40"
                                        />
                                        <p className='pl-2'>About</p>
                                    </NextLink>
                                    <NextLink href="/about#meet-our-founder" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                        <HeartSquareIcon aria-hidden="true" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Founder</p>
                                            <p className="text-sm text-gray-600">
                                                Get to know Alicia Fall
                                            </p>
                                        </div>
                                    </NextLink>
                                    <NextLink href="/about#meet-our-team" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                        <TeamIcon aria-hidden="true" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Team</p>
                                            <p className="text-sm text-gray-600">
                                                Meet the folks behind Her Many Voices
                                            </p>
                                        </div>
                                    </NextLink>
                                    <NextLink href="/about#meet-our-board" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                        <BoardIcon aria-hidden="true" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Board</p>
                                            <p className="text-sm text-gray-600">
                                                Learn about our Board of Advisors
                                            </p>
                                        </div>
                                    </NextLink>
                                    <NextLink href="/about#meet-our-sponsors-and-partners" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                        <SponsorsIcon aria-hidden="true" />

                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Sponsors &amp; Coallition Partners</p>
                                            <p className="text-sm text-gray-600">
                                                Meet the collation who help make our work possible
                                            </p>
                                        </div>
                                    </NextLink>
                                </div>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                        <SeperatorIcon />
                        <NavigationMenu.Item className="mx-2">
                            <NavigationMenu.Trigger className="relative group inline-flex items-center rounded-md p-2 text-sm font-bold text-[#603913] hover:text-[#35200b] hover:text-opacity-90 focus-within:text-green-600 focus-within:hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">What We Do</NavigationMenu.Trigger>
                            <NavigationMenu.Content className="absolute overflow-hidden rounded-lg shadow-lg ring-1 ring-purple-500 ring-opacity-5">
                                <div className="grid gap-8 bg-white p-7">
                                    <NextLink href="/what-we-do" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                        <WhatWeDoIcon aria-hidden="true" />
                                        What We Do
                                    </NextLink>
                                    <NextLink href="/what-we-do#environmental-projects" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                        <EnvProjectsIcon aria-hidden="true" />
                                        <div>
                                            <p className="text-md font-medium text-gray-900">Environmental Projects</p>
                                        </div>
                                    </NextLink>
                                    <NextLink href="/what-we-do#community-projects" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                        <ComProjectsIcon aria-hidden="true" />
                                        <div>
                                            <p className="text-md font-medium text-gray-900">Community Projects</p>
                                        </div>
                                    </NextLink>
                                    <NextLink href="/what-we-do#cultural-projects" className="-m-3 flex rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                        <CulturalProjectsIcon aria-hidden="true" />
                                        <div>
                                            <p className="text-md font-medium text-gray-900">Cultural Projects</p>
                                        </div>
                                    </NextLink>
                                </div>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                        <SeperatorIcon />
                        <NavigationMenu.Item className="mx-2">
                            <NavigationMenu.Trigger className="relative group inline-flex items-center rounded-md p-2 text-sm font-bold text-[#603913] hover:text-[#35200b] hover:text-opacity-90 focus-within:text-green-600 focus-within:hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Who We Serve</NavigationMenu.Trigger>
                            <NavigationMenu.Content className="absolute overflow-hidden rounded-lg shadow-lg ring-1 ring-purple-500 ring-opacity-5">
                                <div className="grid gap-8 bg-white p-7">
                                    <NextLink href="/who-we-serve" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                        <WhoWeServeIcon aria-hidden="true" />
                                        <div className=''>
                                            <p className="text-sm font-medium text-gray-900">Who We Serve</p>
                                            <p className="text-sm text-gray-600">
                                                Get to know our community
                                            </p>
                                        </div>
                                    </NextLink>
                                </div>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                        <SeperatorIcon />
                        <NavigationMenu.Item className="mx-2">
                            <NavigationMenu.Trigger className="relative group inline-flex items-center rounded-md p-2 text-sm font-bold text-[#603913] hover:text-[#35200b] hover:text-opacity-90 focus-within:text-green-600 focus-within:hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Events</NavigationMenu.Trigger>
                            <NavigationMenu.Content className="absolute overflow-hidden rounded-lg shadow-lg ring-1 ring-purple-500 ring-opacity-5">
                                <div className="grid gap-8 bg-white p-7">
                                    <NextLink href="/our-events" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                        <NavCalendarIcon aria-hidden="true" />
                                        Events
                                    </NextLink>
                                    <NextLink href="/our-events#upcoming" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                        <UpcomingEventsIcon aria-hidden="true" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Upcoming Events</p>
                                            <p className="text-sm text-gray-600">
                                                Check out our events schedule
                                            </p>
                                        </div>
                                    </NextLink>
                                    <NextLink href="/our-events#past" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                        <PlayButtonIcon aria-hidden="true" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Past Events</p>
                                            <p className="text-sm text-gray-600">
                                                View our past events
                                            </p>
                                        </div>
                                    </NextLink>
                                    <NavigationMenu.Link href="https://www.addevent.com/calendar/IT413581" className="-m-3 flex rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                        <BellIcon aria-hidden="true" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Get notified</p>
                                            <p className="text-sm text-gray-600">
                                                Sign up so you never miss an event
                                            </p>
                                        </div>
                                    </NavigationMenu.Link >
                                    <NavigationMenu.Link href="https://solo.to/aliciafall" className="-m-3 flex text-left items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50">
                                        <SparkleIcon aria-hidden="true" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Request Alicia</p>
                                            <p className="text-sm text-gray-600">
                                                Invite Alicia to speak at your event
                                            </p>
                                        </div>
                                    </NavigationMenu.Link >
                                </div>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                        <SeperatorIcon />
                        <NavigationMenu.Item className="mx-2">
                            <NavigationMenu.Trigger className="relative group inline-flex items-center rounded-md p-2 text-sm font-bold text-[#603913] hover:text-[#35200b] hover:text-opacity-90 focus-within:text-green-600 focus-within:hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Earth Day</NavigationMenu.Trigger>
                            <NavigationMenu.Content className="absolute overflow-hidden rounded-lg shadow-lg ring-1 ring-purple-500 ring-opacity-5">
                                <div className="grid gap-8 bg-white p-7">
                                    <NextLink href="/earth-day" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                        <EarthDayIcon aria-hidden="true" />
                                        <div className='max-w-[240px]'>
                                            <p className="text-sm font-medium text-gray-900">Earth Day 2022</p>
                                            <p className="text-sm text-gray-600">
                                                A Celebration of Indigenous Wisdom to Face Modern Challenges
                                            </p>
                                        </div>
                                    </NextLink>
                                </div>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                        <SeperatorIcon />
                        <NavigationMenu.Item className="mx-2">
                            <NavigationMenu.Trigger className="relative group inline-flex items-center rounded-md p-2 text-sm font-bold text-[#603913] hover:text-[#35200b] hover:text-opacity-90 focus-within:text-green-600 focus-within:hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Support Us</NavigationMenu.Trigger>
                            <NavigationMenu.Content className="absolute overflow-hidden rounded-lg shadow-lg ring-1 ring-purple-500 ring-opacity-5">
                                <div className="grid gap-8 bg-white p-7">
                                    <NextLink href="/support-us" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                        <SupportUsIcon aria-hidden="true" />
                                        <div className=''>
                                            <p className="text-sm font-medium text-gray-900">Donate</p>
                                            <p className="text-sm text-gray-600">
                                                Get involved! We do a lot with a little.
                                            </p>
                                        </div>
                                    </NextLink>
                                </div>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                        <NavigationMenu.Link
                            className="ml-auto custom-dbox-popup hidden rounded-l-xl rounded-t-xl bg-green-500 py-2 px-6 text-sm font-bold text-white transition duration-200 hover:bg-green-600 lg:inline-block"
                            href="https://donorbox.org/general-96">
                            Donate
                        </NavigationMenu.Link >
                    </NavigationMenu.List>
                </NavigationMenu.Root>
            </>
        )
    } else {
        return (
            <NavigationMenu.Root>
                <NavigationMenu.List>
                    <div className='flex flex-row justify-between sticky top-0 z-50'>
                        <NavigationMenu.Item className="p-4 list-none">
                            <NextLink href="/">
                                <Image
                                    src={logo}
                                    className="h-12"
                                    alt=""
                                    width="50"
                                    height="50"
                                />
                            </NextLink>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item className="p-6 ml-auto list-none">
                            <NavigationMenu.Trigger className="flex items-center text-green-600 w-full">
                                <svg
                                    className="block h-6 w-6 fill-current no-underline"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className='fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50  border-b-2 bg-white border-r'>
                                <div className='mb-8 flex items-center'>
                                    <NextLink href="/about" className="pl-2 pt-2 mr-auto -mb-6 text-3xl font-bold leading-none">
                                        <Image
                                            className="h-16 w-16"
                                            src={logo}
                                            alt=""
                                            width="75"
                                            height="80"
                                        />
                                    </NextLink>
                                </div>
                                <Accordion.Root type="single" defaultValue="item-1" collapsible className='relative flex flex-col py-6 h-full w-full bg-white  overflow-y-auto'>

                                    <Accordion.Item value="item-1" className='flex flex-col h-auto w-auto'>
                                        <Accordion.Header className='flex flex-col bg-white h-auto w-auto'>
                                            <Accordion.Trigger className='w-full p-2 text-lg font-bold text-[#603913] hover:bg-green-50 hover:text-green-600 mb-1 flex flex-row border-b-2'>
                                                About
                                            </Accordion.Trigger>
                                        </Accordion.Header>
                                        <Accordion.Content className='flex flex-col h-auto w-full mr-auto bg-gray-50 font-heading'>
                                            <NextLink href="/about" className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <div className="h-8 w-8 mr-2 mb-auto">
                                                    <Image

                                                        src={logo}
                                                        alt=""
                                                        width="40"
                                                        height="45"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900 -ml-1">About</p>
                                                    <p className="text-sm text-gray-600 -ml-1">
                                                        Learn about Her Many Voices Foundation
                                                    </p>
                                                </div>
                                            </NextLink>
                                            <NextLink href="/about#meet-our-founder" className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <HeartSquareIcon aria-hidden="true" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Founder</p>
                                                    <p className="text-sm text-gray-600">
                                                        Get to know Alicia Fall
                                                    </p>
                                                </div>
                                            </NextLink>
                                            <NextLink href="/about#meet-our-team" className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <TeamIcon aria-hidden="true" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Team</p>
                                                    <p className="text-sm text-gray-600">
                                                        Meet the folks behind Her Many Voices
                                                    </p>
                                                </div>
                                            </NextLink>
                                            <NextLink href="/about#meet-our-board" className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <BoardIcon aria-hidden="true" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Board</p>
                                                    <p className="text-sm text-gray-600">
                                                        Learn about our Board of Advisors
                                                    </p>
                                                </div>
                                            </NextLink>
                                            <NextLink href="/about#meet-our-sponsors-and-partners" className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <SponsorsIcon aria-hidden="true" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Sponsors &amp; Coallition Partners</p>
                                                    <p className="text-sm text-gray-600">
                                                        Meet the collation who help make our work possible
                                                    </p>
                                                </div>
                                            </NextLink>
                                        </Accordion.Content>
                                    </Accordion.Item>
                                    <Accordion.Item value="item-2" className='flex flex-col h-auto w-auto'>
                                        <Accordion.Header className='flex flex-col bg-white h-auto w-auto'>
                                            <Accordion.Trigger className='w-full p-2 text-lg font-bold text-[#603913] hover:bg-green-50 hover:text-green-600 mb-1 flex flex-row border-b-2'>
                                                What We Do
                                            </Accordion.Trigger>
                                        </Accordion.Header>
                                        <Accordion.Content className='flex flex-col h-auto w-full mr-auto bg-gray-50 font-heading'>
                                            <NextLink href="/what-we-do" className="flex items-center rounded-lg py-2 pl-4 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <WhatWeDoIcon aria-hidden="true" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">What we do</p>
                                                    <p className="text-sm text-gray-600">
                                                        Learn about our work
                                                    </p>
                                                </div>
                                            </NextLink>
                                            <NextLink href="/what-we-do#environmental-projects" className="flex items-center rounded-lg py-2 pl-4 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <EnvProjectsIcon aria-hidden="true" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Environmental Projects</p>
                                                </div>
                                            </NextLink>
                                            <NextLink href="/what-we-do#communitys-projects" className="flex items-center rounded-lg py-2 pl-4 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <ComProjectsIcon aria-hidden="true" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Community Projects</p>
                                                </div>
                                            </NextLink>
                                            <NextLink href="/what-we-do#cultural-projects" className="flex items-center rounded-lg py-2 pl-4 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <CulturalProjectsIcon aria-hidden="true" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Cultural Projects</p>
                                                </div>
                                            </NextLink>
                                        </Accordion.Content>
                                    </Accordion.Item>
                                    <Accordion.Item value="item-3" className='flex flex-col h-auto w-auto'>
                                        <Accordion.Header className='flex flex-col bg-white h-auto w-auto'>
                                            <Accordion.Trigger className='w-full p-2 text-lg font-bold text-[#603913] hover:bg-green-50 hover:text-green-600 mb-1 flex flex-row border-b-2'>
                                                Who We Serve
                                            </Accordion.Trigger>
                                        </Accordion.Header>
                                        <Accordion.Content className='flex flex-col h-auto w-full mr-auto bg-gray-50 font-heading'>
                                            <NextLink href="/support us" className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <SupportUsIcon />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Who We Serve</p>
                                                    <p className="text-sm text-gray-600">
                                                        Get to know our community
                                                    </p>
                                                </div>
                                            </NextLink>
                                        </Accordion.Content>
                                    </Accordion.Item>
                                    <Accordion.Item value="item-4" className='flex flex-col h-auto w-auto'>
                                        <Accordion.Header className='flex flex-col bg-white h-auto w-auto'>
                                            <Accordion.Trigger className='w-full p-2 text-lg font-bold text-[#603913] hover:bg-green-50 hover:text-green-600 mb-1 flex flex-row border-b-2'>
                                                Events
                                            </Accordion.Trigger>
                                        </Accordion.Header>
                                        <Accordion.Content className='flex flex-col h-auto w-full mr-auto bg-gray-50 font-heading'>
                                            <NextLink href="/our-events" className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <NavCalendarIcon />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Events</p>
                                                </div>
                                            </NextLink>
                                            <NextLink href="/our-events#upcoming" className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <UpcomingEventsIcon aria-hidden="true" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Upcoming Events</p>
                                                    <p className="text-sm text-gray-600">
                                                        Check out our events schedule
                                                    </p>
                                                </div>
                                            </NextLink>
                                            <NextLink href="/our-events#past" className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <PlayButtonIcon aria-hidden="true" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Past Events</p>
                                                    <p className="text-sm text-gray-600">
                                                        View our past events
                                                    </p>
                                                </div>
                                            </NextLink>
                                            <NavigationMenu.Link href="https://www.addevent.com/calendar/IT413581" className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <BellIcon aria-hidden="true" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Get notified</p>
                                                    <p className="text-sm text-gray-600">
                                                        Sign up so you never miss an event
                                                    </p>
                                                </div>
                                            </NavigationMenu.Link>
                                            <NavigationMenu.Link href="https://solo.to/aliciafall" className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <SparkleIcon aria-hidden="true" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Request Alicia</p>
                                                    <p className="text-sm text-gray-600">
                                                        Invite Alicia to speak at your event
                                                    </p>
                                                </div>
                                            </NavigationMenu.Link>
                                        </Accordion.Content>
                                    </Accordion.Item>
                                    <Accordion.Item value="item-5" className='flex flex-col h-auto w-auto'>
                                        <Accordion.Header className='flex flex-col bg-white h-auto w-auto'>
                                            <Accordion.Trigger className='w-full p-2 text-lg font-bold text-[#603913] hover:bg-green-50 hover:text-green-600 mb-1 flex flex-row border-b-2'>
                                                Earth Day
                                            </Accordion.Trigger>
                                        </Accordion.Header>
                                        <Accordion.Content className='flex flex-col h-auto w-full mr-auto bg-gray-50 font-heading'>
                                            <NextLink href="/earth-day" className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <EarthDayIcon />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Earth Day 2022</p>
                                                    <p className="text-sm text-gray-600">
                                                        A Celebration of Indigenous Wisdom to Face Modern Challenges
                                                    </p>
                                                </div>
                                            </NextLink>
                                        </Accordion.Content>
                                    </Accordion.Item>
                                    <Accordion.Item value="item-6" className='flex flex-col h-auto w-auto'>
                                        <Accordion.Header className='flex flex-col bg-white h-auto w-auto'>
                                            <Accordion.Trigger className='w-full p-2 text-lg font-bold text-[#603913] hover:bg-green-50 hover:text-green-600 mb-1 flex flex-row border-b-2'>
                                                Support Us
                                            </Accordion.Trigger>
                                        </Accordion.Header>
                                        <Accordion.Content className='flex flex-col h-auto w-full mr-auto bg-gray-50 font-heading'>
                                            <NextLink href="/support us" className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 text-start">
                                                <SupportUsIcon />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Donate</p>
                                                    <p className="text-sm text-gray-600">
                                                        Get involved! We do a lot with a little
                                                    </p>
                                                </div>
                                            </NextLink>
                                        </Accordion.Content>
                                    </Accordion.Item>
                                </Accordion.Root>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                    </div>
                </NavigationMenu.List>
            </NavigationMenu.Root>)
    }
};

function SeperatorIcon() {
    return (
        <svg
            className="current-fill h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            ></path>
        </svg>
    )
}