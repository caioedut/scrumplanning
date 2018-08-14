angular.module('app').service('ApiService', function ($http) {

    this.baseUrl = '';

    this.getUrl = function (uri) {
        // Prevent double slashes
        return this.baseUrl.replace(/\/+$/, '') + '/' + uri.replace(/^\/|\/$/g, '') + '/';
    };

    this.get = function (url, params) {
        params = params || '';
        return typeof params === 'object' ? $http.get(this.getUrl(url), {params: params}) : $http.get(this.getUrl(url) + params);
    };

    this.post = function (url, data) {
        return $http.post(this.getUrl(url), data);
    };

    this.put = function (url, id, data) {
        return $http.put(this.getUrl(url) + id, data);
    };

    this.delete = function (url, id) {
        return $http.delete(this.getUrl(url) + id);
    };

    this.save = function (url, id, data) {
        return id ? this.put(url, id, data) : this.post(url, data);
    };

});