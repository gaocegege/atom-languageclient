"use strict";
/**
 *
 */
var _ = require('lodash');
var request_light_1 = require('request-light');
var defaultAssociations;
function getDefaults() {
    if (defaultAssociations) {
        return Promise.resolve(defaultAssociations);
    }
    return request_light_1.xhr({
        url: 'http://schemastore.org/api/json/catalog.json'
    }).then(function (response) {
        return JSON.parse(response.responseText);
    }, function (error) {
        return error.responseText || request_light_1.getErrorStatusDescription(error.status) || error.toString();
    })
        .then(function (json) {
        var associations = {};
        _.each(json.schemas, function (item) {
            _.each(item.fileMatch, function (fileMatch) {
                var association = associations[fileMatch];
                if (!association) {
                    association = [];
                    associations[fileMatch] = association;
                }
                association.push(item.url);
            });
        });
        return (defaultAssociations = associations);
    });
}
exports.getDefaults = getDefaults;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC12YWxpZGF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BsdWdpbnMvYXRvbS1sYW5ndWFnZS1qc29uL3NlcnZlci9kZWZhdWx0LXZhbGlkYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILElBQVksQ0FBQyxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQzVCLDhCQUE0RCxlQUFlLENBQUMsQ0FBQTtBQUU1RSxJQUFJLG1CQUE0QyxDQUFDO0FBQ2pEO0lBRUksRUFBRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxtQkFBRyxDQUFDO1FBQ1AsR0FBRyxFQUFFLDhDQUE4QztLQUN0RCxDQUFDLENBQUMsSUFBSSxDQUNILFVBQUEsUUFBUTtRQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDLEVBQ0QsVUFBQyxLQUFrQjtRQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLHlDQUF5QixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0YsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLFVBQUMsSUFFTjtRQUNHLElBQU0sWUFBWSxHQUE0QixFQUFFLENBQUM7UUFDakQsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUEsSUFBSTtZQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBQSxTQUFTO2dCQUM1QixJQUFJLFdBQVcsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDZixXQUFXLEdBQUcsRUFBRSxDQUFDO29CQUNqQixZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsV0FBVyxDQUFDO2dCQUMxQyxDQUFDO2dCQUNELFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsQ0FBQyxtQkFBbUIsR0FBRyxZQUFZLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztBQUNYLENBQUM7QUEvQmUsbUJBQVcsY0ErQjFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICpcclxuICovXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgWEhSUmVzcG9uc2UsIGdldEVycm9yU3RhdHVzRGVzY3JpcHRpb24sIHhociB9IGZyb20gJ3JlcXVlc3QtbGlnaHQnO1xyXG5cclxubGV0IGRlZmF1bHRBc3NvY2lhdGlvbnM6IEpzb24uU2NoZW1hQXNzb2NpYXRpb25zO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdHMoKSB7XHJcblxyXG4gICAgaWYgKGRlZmF1bHRBc3NvY2lhdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRlZmF1bHRBc3NvY2lhdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB4aHIoe1xyXG4gICAgICAgIHVybDogJ2h0dHA6Ly9zY2hlbWFzdG9yZS5vcmcvYXBpL2pzb24vY2F0YWxvZy5qc29uJ1xyXG4gICAgfSkudGhlbihcclxuICAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlc3BvbnNlLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3I6IFhIUlJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZVRleHQgfHwgZ2V0RXJyb3JTdGF0dXNEZXNjcmlwdGlvbihlcnJvci5zdGF0dXMpIHx8IGVycm9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoanNvbjoge1xyXG4gICAgICAgICAgICBzY2hlbWFzOiAoeyBuYW1lOiBzdHJpbmc7IGZpbGVNYXRjaDogc3RyaW5nW10sIHVybDogc3RyaW5nIH0pW11cclxuICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzc29jaWF0aW9uczogSnNvbi5TY2hlbWFBc3NvY2lhdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgXy5lYWNoKGpzb24uc2NoZW1hcywgaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBfLmVhY2goaXRlbS5maWxlTWF0Y2gsIGZpbGVNYXRjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFzc29jaWF0aW9uID0gYXNzb2NpYXRpb25zW2ZpbGVNYXRjaF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhc3NvY2lhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGlvbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGlvbnNbZmlsZU1hdGNoXSA9IGFzc29jaWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGlvbi5wdXNoKGl0ZW0udXJsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIChkZWZhdWx0QXNzb2NpYXRpb25zID0gYXNzb2NpYXRpb25zKTtcclxuICAgICAgICB9KTtcclxufVxyXG4iXX0=