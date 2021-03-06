"use strict";
/**
 *  @license   MIT
 *  @copyright OmniSharp Team
 *  @summary   Adds support for https://github.com/Microsoft/language-server-protocol (and more!) to https://atom.io
 */
/* tslint:disable:no-any */
var _ = require('lodash');
var atom_1 = require('atom');
var types_1 = require('atom-languageservices/types');
var _toUri = require('file-url');
var uriToFilePath_1 = require('./uriToFilePath');
exports.fromUri = uriToFilePath_1.uriToFilePath;
function toUri(editor) {
    return _toUri(editor.getURI());
}
exports.toUri = toUri;
function getLanguageId(editor) {
    return editor.getGrammar().name;
}
exports.getLanguageId = getLanguageId;
function toPosition(value) {
    return types_1.Position.create(value.row, value.column);
}
exports.toPosition = toPosition;
function fromPosition(value) {
    return new atom_1.Point(value.line, value.character);
}
exports.fromPosition = fromPosition;
function toRange(value) {
    return types_1.Range.create(toPosition(value.start), toPosition(value.end));
}
exports.toRange = toRange;
function fromRange(value) {
    return new atom_1.Range(fromPosition(value.start), fromPosition(value.end));
}
exports.fromRange = fromRange;
function fromTextEdit(value) {
    return {
        range: fromRange(value.range),
        text: value.newText
    };
}
exports.fromTextEdit = fromTextEdit;
function fromTextEdits(values) {
    return _.map(values, fromTextEdit);
}
exports.fromTextEdits = fromTextEdits;
function fromWorkspaceEdit(edit) {
    return _.map(edit.changes, function (edits, filePath) {
        return ({
            changes: fromTextEdits(edits),
            filePath: uriToFilePath_1.uriToFilePath(filePath)
        });
    });
}
exports.fromWorkspaceEdit = fromWorkspaceEdit;
function toTextDocumentIdentifier(editor) {
    return types_1.TextDocumentIdentifier.create(toUri(editor));
}
exports.toTextDocumentIdentifier = toTextDocumentIdentifier;
function hasLinterText(message) {
    return !!message.text;
}
exports.hasLinterText = hasLinterText;
function getLinterText(message) {
    if (!hasLinterText(message)) {
        return message.html;
    }
    return message.text;
}
exports.getLinterText = getLinterText;
function hasCompletionText(message) {
    return !!message.text;
}
exports.hasCompletionText = hasCompletionText;
function getCompletionText(message) {
    if (message.displayText) {
        return message.displayText;
    }
    if (!hasCompletionText(message)) {
        return message.snippet;
    }
    return message.text;
}
exports.getCompletionText = getCompletionText;
function getCompletionReplacementText(message) {
    if (!hasCompletionText(message)) {
        return message.snippet;
    }
    return message.text;
}
exports.getCompletionReplacementText = getCompletionReplacementText;
exports.isDefined = _.negate(_.isUndefined);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jYXBhYmlsaXRpZXMvdXRpbHMvY29udmVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRztBQUNILDJCQUEyQjtBQUMzQixJQUFZLENBQUMsV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUM1QixxQkFBNkIsTUFBTSxDQUFDLENBQUE7QUFFcEMsc0JBQTRGLDZCQUE2QixDQUFDLENBQUE7QUFDMUgsSUFBWSxNQUFNLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFDbkMsOEJBQXlDLGlCQUFpQixDQUFDLENBQUE7QUFDbEQsZUFBTztBQUVoQixlQUFzQixNQUF1QjtJQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFGZSxhQUFLLFFBRXBCLENBQUE7QUFFRCx1QkFBOEIsTUFBdUI7SUFDakQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFDcEMsQ0FBQztBQUZlLHFCQUFhLGdCQUU1QixDQUFBO0FBRUQsb0JBQTJCLEtBQXVCO0lBQzlDLE1BQU0sQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRmUsa0JBQVUsYUFFekIsQ0FBQTtBQUVELHNCQUE2QixLQUFlO0lBQ3hDLE1BQU0sQ0FBQyxJQUFJLFlBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRmUsb0JBQVksZUFFM0IsQ0FBQTtBQUVELGlCQUF3QixLQUF1QjtJQUMzQyxNQUFNLENBQUMsYUFBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsQ0FBQyxLQUFL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Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqICBAbGljZW5zZSAgIE1JVFxyXG4gKiAgQGNvcHlyaWdodCBPbW5pU2hhcnAgVGVhbVxyXG4gKiAgQHN1bW1hcnkgICBBZGRzIHN1cHBvcnQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvbGFuZ3VhZ2Utc2VydmVyLXByb3RvY29sIChhbmQgbW9yZSEpIHRvIGh0dHBzOi8vYXRvbS5pb1xyXG4gKi9cclxuLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgUG9pbnQsIFJhbmdlIH0gZnJvbSAnYXRvbSc7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSwgTGludGVyLCBUZXh0IH0gZnJvbSAnYXRvbS1sYW5ndWFnZXNlcnZpY2VzJztcclxuaW1wb3J0IHsgUG9zaXRpb24sIFJhbmdlIGFzIExzUmFuZ2UsIFRleHREb2N1bWVudElkZW50aWZpZXIsIFRleHRFZGl0LCBXb3Jrc3BhY2VFZGl0IH0gZnJvbSAnYXRvbS1sYW5ndWFnZXNlcnZpY2VzL3R5cGVzJztcclxuaW1wb3J0ICogYXMgX3RvVXJpIGZyb20gJ2ZpbGUtdXJsJztcclxuaW1wb3J0IHsgdXJpVG9GaWxlUGF0aCBhcyBmcm9tVXJpIH0gZnJvbSAnLi91cmlUb0ZpbGVQYXRoJztcclxuZXhwb3J0IHsgZnJvbVVyaSB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvVXJpKGVkaXRvcjogQXRvbS5UZXh0RWRpdG9yKSB7XHJcbiAgICByZXR1cm4gX3RvVXJpKGVkaXRvci5nZXRVUkkoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5ndWFnZUlkKGVkaXRvcjogQXRvbS5UZXh0RWRpdG9yKSB7XHJcbiAgICByZXR1cm4gZWRpdG9yLmdldEdyYW1tYXIoKS5uYW1lO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Qb3NpdGlvbih2YWx1ZTogVGV4dEJ1ZmZlci5Qb2ludCk6IFBvc2l0aW9uIHtcclxuICAgIHJldHVybiBQb3NpdGlvbi5jcmVhdGUodmFsdWUucm93LCB2YWx1ZS5jb2x1bW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnJvbVBvc2l0aW9uKHZhbHVlOiBQb3NpdGlvbik6IFRleHRCdWZmZXIuUG9pbnQge1xyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh2YWx1ZS5saW5lLCB2YWx1ZS5jaGFyYWN0ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9SYW5nZSh2YWx1ZTogVGV4dEJ1ZmZlci5SYW5nZSk6IExzUmFuZ2Uge1xyXG4gICAgcmV0dXJuIExzUmFuZ2UuY3JlYXRlKHRvUG9zaXRpb24odmFsdWUuc3RhcnQpLCB0b1Bvc2l0aW9uKHZhbHVlLmVuZCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJhbmdlKHZhbHVlOiBMc1JhbmdlKTogVGV4dEJ1ZmZlci5SYW5nZSB7XHJcbiAgICByZXR1cm4gbmV3IFJhbmdlKGZyb21Qb3NpdGlvbih2YWx1ZS5zdGFydCksIGZyb21Qb3NpdGlvbih2YWx1ZS5lbmQpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZyb21UZXh0RWRpdCh2YWx1ZTogVGV4dEVkaXQpOiBUZXh0LklGaWxlQ2hhbmdlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmFuZ2U6IGZyb21SYW5nZSh2YWx1ZS5yYW5nZSksXHJcbiAgICAgICAgdGV4dDogdmFsdWUubmV3VGV4dFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZyb21UZXh0RWRpdHModmFsdWVzOiBUZXh0RWRpdFtdKTogVGV4dC5JRmlsZUNoYW5nZVtdIHtcclxuICAgIHJldHVybiBfLm1hcCh2YWx1ZXMsIGZyb21UZXh0RWRpdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmcm9tV29ya3NwYWNlRWRpdChlZGl0OiBXb3Jrc3BhY2VFZGl0KTogVGV4dC5JV29ya3NwYWNlQ2hhbmdlW10ge1xyXG4gICAgcmV0dXJuIF8ubWFwKGVkaXQuY2hhbmdlcywgKGVkaXRzLCBmaWxlUGF0aCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoe1xyXG4gICAgICAgICAgICBjaGFuZ2VzOiBmcm9tVGV4dEVkaXRzKGVkaXRzKSxcclxuICAgICAgICAgICAgZmlsZVBhdGg6IGZyb21VcmkoZmlsZVBhdGgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvVGV4dERvY3VtZW50SWRlbnRpZmllcihlZGl0b3I6IEF0b20uVGV4dEVkaXRvcik6IFRleHREb2N1bWVudElkZW50aWZpZXIge1xyXG4gICAgcmV0dXJuIFRleHREb2N1bWVudElkZW50aWZpZXIuY3JlYXRlKHRvVXJpKGVkaXRvcikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzTGludGVyVGV4dChtZXNzYWdlOiBhbnkpOiBtZXNzYWdlIGlzIExpbnRlci5UZXh0TWVzc2FnZSB7XHJcbiAgICByZXR1cm4gISFtZXNzYWdlLnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMaW50ZXJUZXh0KG1lc3NhZ2U6IExpbnRlci5NZXNzYWdlKSB7XHJcbiAgICBpZiAoIWhhc0xpbnRlclRleHQobWVzc2FnZSkpIHtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZS5odG1sO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UudGV4dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NvbXBsZXRpb25UZXh0KG1lc3NhZ2U6IGFueSk6IG1lc3NhZ2UgaXMgQXV0b2NvbXBsZXRlLklUZXh0U3VnZ2VzdGlvbiB7XHJcbiAgICByZXR1cm4gISFtZXNzYWdlLnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wbGV0aW9uVGV4dChtZXNzYWdlOiBBdXRvY29tcGxldGUuU3VnZ2VzdGlvbikge1xyXG4gICAgaWYgKG1lc3NhZ2UuZGlzcGxheVRleHQpIHtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZS5kaXNwbGF5VGV4dDtcclxuICAgIH1cclxuICAgIGlmICghaGFzQ29tcGxldGlvblRleHQobWVzc2FnZSkpIHtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZS5zbmlwcGV0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UudGV4dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBsZXRpb25SZXBsYWNlbWVudFRleHQobWVzc2FnZTogQXV0b2NvbXBsZXRlLlN1Z2dlc3Rpb24pIHtcclxuICAgIGlmICghaGFzQ29tcGxldGlvblRleHQobWVzc2FnZSkpIHtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZS5zbmlwcGV0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UudGV4dDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzRGVmaW5lZCA9IF8ubmVnYXRlKF8uaXNVbmRlZmluZWQpO1xyXG4iXX0=