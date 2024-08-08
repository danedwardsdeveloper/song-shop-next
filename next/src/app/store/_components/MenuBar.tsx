'use client';
import { useState, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	TransitionChild,
} from '@headlessui/react';
import {
	Bars3Icon,
	MusicalNoteIcon,
	Cog6ToothIcon,
	HomeIcon,
	UsersIcon,
	XMarkIcon,
	InformationCircleIcon,
} from '@heroicons/react/24/outline';

import { removeUnusedStyles } from '../../_utils/tailwindUtils';
import CompanyLogo from './CompanyLogo';

interface LayoutProps {
	children: ReactNode;
}

export default function StoreFront({ children }: LayoutProps) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const pathname = usePathname();

	const [navigation, setNavigation] = useState([
		{ name: 'Home', href: '/store', icon: HomeIcon },
		{
			name: 'Songs',
			href: '/store/songs',
			icon: MusicalNoteIcon,
		},
		{
			name: 'Writers',
			href: '#',
			icon: UsersIcon,
		},
		{
			name: 'How it works',
			href: '/store/how-it-works',
			icon: InformationCircleIcon,
		},
	]);

	const teams = [
		{ id: 1, name: 'Heroicons', href: '#', initial: 'H' },
		{ id: 2, name: 'Tailwind Labs', href: '#', initial: 'T' },
		{ id: 3, name: 'Work', href: '#', initial: 'W' },
	];
	const userNavigation = [
		{ name: 'Your profile', href: '#' },
		{ name: 'Sign out', href: '#' },
	];

	return (
		<div>
			<Dialog
				open={sidebarOpen}
				onClose={setSidebarOpen}
				className="relative z-50 lg:hidden"
			>
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
				/>

				<div className="fixed inset-0 flex">
					<DialogPanel
						transition
						className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
					>
						<TransitionChild>
							<div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
								<button
									type="button"
									onClick={() => setSidebarOpen(false)}
									className="-m-2.5 p-2.5"
								>
									<span className="sr-only">Close sidebar</span>
									<XMarkIcon
										aria-hidden="true"
										className="h-6 w-6 text-white"
									/>
								</button>
							</div>
						</TransitionChild>
						{/* Sidebar component*/}
						<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
							<div className="flex h-16 shrink-0 items-center">
								<CompanyLogo target="/store" />
							</div>
							<nav className="flex flex-1 flex-col">
								<ul
									role="list"
									className="flex flex-1 flex-col gap-y-7"
								>
									<li>
										<ul role="list" className="-mx-2 space-y-1">
											{navigation.map((item) => (
												<li key={item.name}>
													<Link
														href={item.href}
														className={removeUnusedStyles(
															pathname === item.href
																? 'bg-gray-800 text-white'
																: 'text-gray-400 hover:bg-gray-800 hover:text-white',
															'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
														)}
													>
														<item.icon
															aria-hidden="true"
															className="h-6 w-6 shrink-0"
														/>
														{item.name}
													</Link>
												</li>
											))}
										</ul>
									</li>
									<li>
										<div className="text-xs font-semibold leading-6 text-gray-400">
											Your teams
										</div>
										<ul role="list" className="-mx-2 mt-2 space-y-1">
											{teams.map((team) => (
												<li key={team.name}>
													<Link
														href={team.href}
														className={removeUnusedStyles(
															pathname === team.href
																? 'bg-gray-800 text-white'
																: 'text-gray-400 hover:bg-gray-800 hover:text-white',
															'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
														)}
													>
														<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
															{team.initial}
														</span>
														<span className="truncate">
															{team.name}
														</span>
													</Link>
												</li>
											))}
										</ul>
									</li>
									<li className="mt-auto">
										<a
											href="#"
											className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
										>
											<Cog6ToothIcon
												aria-hidden="true"
												className="h-6 w-6 shrink-0"
											/>
											Settings
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</DialogPanel>
				</div>
			</Dialog>

			{/* Static sidebar for desktop */}
			<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
				{/* Sidebar component*/}
				<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
					<div className="flex h-16 shrink-0 items-center">
						<CompanyLogo target="/store" />
					</div>
					<nav className="flex flex-1 flex-col">
						<ul role="list" className="flex flex-1 flex-col gap-y-7">
							<li>
								<ul role="list" className="-mx-2 space-y-1">
									{navigation.map((item) => (
										<li key={item.name}>
											<Link
												href={item.href}
												className={removeUnusedStyles(
													pathname === item.href
														? 'bg-gray-800 text-white'
														: 'text-gray-400 hover:bg-gray-800 hover:text-white',
													'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
												)}
											>
												<item.icon
													aria-hidden="true"
													className="h-6 w-6 shrink-0"
												/>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</li>
							<li>
								<div className="text-xs font-semibold leading-6 text-gray-400">
									Your teams
								</div>
								<ul role="list" className="-mx-2 mt-2 space-y-1">
									{teams.map((team) => (
										<li key={team.name}>
											<Link
												href={team.href}
												className={removeUnusedStyles(
													pathname === team.href
														? 'bg-gray-800 text-white'
														: 'text-gray-400 hover:bg-gray-800 hover:text-white',
													'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
												)}
											>
												<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
													{team.initial}
												</span>
												<span className="truncate">
													{team.name}
												</span>
											</Link>
										</li>
									))}
								</ul>
							</li>
							<li className="mt-auto">
								<a
									href="#"
									className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
								>
									<Cog6ToothIcon
										aria-hidden="true"
										className="h-6 w-6 shrink-0"
									/>
									Settings
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className="lg:pl-72">
				<div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 lg:hidden">
					<button
						type="button"
						onClick={() => setSidebarOpen(true)}
						className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
					>
						<span className="sr-only">Open sidebar</span>
						<Bars3Icon aria-hidden="true" className="h-6 w-6" />
					</button>
				</div>
				{children}
			</div>
		</div>
	);
}
