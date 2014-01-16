/*******************************************************************************
 * @license
 * Copyright (c) 2014 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License v1.0
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html).
 *
 * Contributors: IBM Corporation - initial API and implementation
 ******************************************************************************/

/*global define*/

define("orion/editor/stylers/php/php", ["orion/editor/stylers/shared/shared"], function(mShared) { //$NON-NLS-0$
	var keywords = [
		"abstract", "and", "array", "as", //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"break", //$NON-NLS-0$
		"case", "catch", "class", "clone", "const", "continue", //$NON-NLS-5$ //$NON-NLS-4$ //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"declare", "default", "die", "do", //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"echo", "else", "elseif", "empty", "enddeclare", "endfor", //$NON-NLS-5$ //$NON-NLS-4$ //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"endforeach", "endif", "endswitch", "endwhile", "eval", "exit", "extends", //$NON-NLS-6$ //$NON-NLS-5$ //$NON-NLS-4$ //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"false", "FALSE", "final", "finally", "for", "foreach", "function", //$NON-NLS-6$ //$NON-NLS-5$ //$NON-NLS-4$ //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"global", "goto", //$NON-NLS-1$ //$NON-NLS-0$
		"if", "implements", "include", "include_once", "insteadof", "interface", "instanceof", "isset", //$NON-NLS-7$ //$NON-NLS-6$ //$NON-NLS-5$ //$NON-NLS-4$ //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"list", //$NON-NLS-0$
		"namespace", "new", "null", "NULL", //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"or", //$NON-NLS-0$
		"parent", "print", "private", "protected", "public", //$NON-NLS-4$ //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"require", "require_once", "return", //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"self", "static", "switch", //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"throw", "trait", "try", "true", "TRUE", //$NON-NLS-4$ //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"unset", "use", //$NON-NLS-1$ //$NON-NLS-0$
		"var", //$NON-NLS-0$
		"while", //$NON-NLS-0$
		"xor", //$NON-NLS-0$
		"yield" //$NON-NLS-0$
	];

	var grammars = mShared.grammars;
	grammars.push({
		id: "orion.php",
		contentTypes: ["text/x-php"],
		patterns: [
			{
				include: "orion.patterns"
			}, {
				match: "\\b(?:" + keywords.join("|") + ")\\b",
				name: "keyword.control"
			}, {
				/* override orion.patterns#string_singleQuote */
				id: "string_singleQuote"
			}
		]
	});

	return {
		grammars: grammars,
		keywords: keywords
	};
});
