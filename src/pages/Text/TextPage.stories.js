import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { TextPage } from "./TextPage";

import heroImg from "../../images/fpo-1200x650.png";

let stories = storiesOf("Pages/TextPage", module);

stories
	.addDecorator(withInfo)
	.addDecorator(withSmartKnobs)
	.addDecorator(withKnobs);

/**
 * Christmas hero content
 */
const christmasHero = {
	title: "Our awesome Christmas Title",
	description: "Christmas Christmas Christmas",
	imgsrc: heroImg,
	imgalt: "Alt Text"
};

/**
 * Long Card list array
 */
const longCardList = [
	{
		styleModifier: "c-card--dark",
		title: "Card 1",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		title: "Card 2",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		title: "Card 3",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		title: "Card 4",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		styleModifier: "c-card--dark",
		title: "Card 5",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		title: "Card 6",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		title: "Card 7",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		title: "Card 8",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		styleModifier: "c-card--dark",
		title: "Card 9",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		title: "Card 10",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		title: "Card 11",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		title: "Card 12",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	}
];

stories.add("Template", () => (
	<TextPage
		title="Text Page Template"
		description="This is the page description"
	>
		<p>
			A text passage contains arbitrary text that might come from a CMS.
			It should live within a container that caps the line length of the
			text to avoid a straining reading experience.
		</p>

		<h2>Heading 2</h2>

		<p>
			This is another paragraph of text. Lorem ipsum dolor sit amet,
			consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat.
		</p>

		<ul>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
		</ul>

		<h3>Heading 3</h3>

		<ol>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
		</ol>

		<p>
			<a href="#x">Lorem ipsum dolor sit amet</a>, consectetur adipiscing
			elit, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat.
		</p>

		<blockquote>
			<p>This is a quotation from something.</p>
			<cite>Cite source</cite>
		</blockquote>

		<p>That is all.</p>
	</TextPage>
));

stories.add("Blog Post", () => (
	<TextPage
		title="This is a blog post"
		description="Posted by Author Name on [publication date]"
	>
		<p>
			A text passage contains arbitrary text that might come from a CMS.
			It should live within a container that caps the line length of the
			text to avoid a straining reading experience.
		</p>

		<h2>Heading 2</h2>

		<p>
			This is another paragraph of text. Lorem ipsum dolor sit amet,
			consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat.
		</p>

		<ul>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
		</ul>

		<h3>Heading 3</h3>

		<ol>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
		</ol>

		<p>
			<a href="#x">Lorem ipsum dolor sit amet</a>, consectetur adipiscing
			elit, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat.
		</p>

		<blockquote>
			<p>This is a quotation from something.</p>
			<cite>Cite source</cite>
		</blockquote>

		<p>That is all.</p>
	</TextPage>
));

stories.add("Legal Page", () => (
	<TextPage title="Terms and Conditions" description="Last updated on [date]">
		<p>
			A text passage contains arbitrary text that might come from a CMS.
			It should live within a container that caps the line length of the
			text to avoid a straining reading experience.
		</p>

		<h2>Heading 2</h2>

		<p>
			This is another paragraph of text. Lorem ipsum dolor sit amet,
			consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat.
		</p>

		<ul>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
		</ul>

		<h3>Heading 3</h3>

		<ol>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
		</ol>

		<p>
			<a href="#x">Lorem ipsum dolor sit amet</a>, consectetur adipiscing
			elit, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat.
		</p>

		<blockquote>
			<p>This is a quotation from something.</p>
			<cite>Cite source</cite>
		</blockquote>

		<p>That is all.</p>
	</TextPage>
));
