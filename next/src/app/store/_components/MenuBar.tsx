'use client';

import { useState, ReactNode } from 'react';
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	TransitionChild,
} from '@headlessui/react';
import {
	Bars3Icon,
	CalendarIcon,
	MusicalNoteIcon,
	ChartPieIcon,
	Cog6ToothIcon,
	DocumentDuplicateIcon,
	FolderIcon,
	HomeIcon,
	UsersIcon,
	XMarkIcon,
	InformationCircleIcon,
} from '@heroicons/react/24/outline';

import { removeUnusedStyles } from '../../_utils/tailwindUtils';

const navigation = [
	{ name: 'Home', href: '#', icon: HomeIcon, current: true },
	{ name: 'Songs', href: '#', icon: MusicalNoteIcon, current: false },
	{ name: 'Writers', href: '#', icon: UsersIcon, current: false },
	{
		name: 'How it works',
		href: '#',
		icon: InformationCircleIcon,
		current: false,
	},
];
const teams = [
	{ id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
	{ id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
	{ id: 3, name: 'Work', href: '#', initial: 'W', current: false },
];
const userNavigation = [
	{ name: 'Your profile', href: '#' },
	{ name: 'Sign out', href: '#' },
];

const companyLogo = {
	src: `/musicNote.svg`,
	alt: `Song Shop | songshop.io`,
};

interface LayoutProps {
	children: ReactNode;
}

export default function StoreFront({ children }: LayoutProps) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

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
								<img
									alt={companyLogo.alt}
									src={companyLogo.src}
									className="h-8 w-auto"
								/>
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
													<a
														href={item.href}
														className={removeUnusedStyles(
															item.current
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
													</a>
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
													<a
														href={team.href}
														className={removeUnusedStyles(
															team.current
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
													</a>
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
				{/* Sidebar component, swap this element with another sidebar if you like */}
				<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
					<div className="flex h-16 shrink-0 items-center">
						<img
							alt={companyLogo.alt}
							src={companyLogo.src}
							className="h-8 w-auto"
						/>
					</div>
					<nav className="flex flex-1 flex-col">
						<ul role="list" className="flex flex-1 flex-col gap-y-7">
							<li>
								<ul role="list" className="-mx-2 space-y-1">
									{navigation.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className={removeUnusedStyles(
													item.current
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
											</a>
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
											<a
												href={team.href}
												className={removeUnusedStyles(
													team.current
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
											</a>
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
