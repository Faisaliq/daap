import http from '@/services/http'

class UserRestApiManager {
    async getRecord(url, data = null) {
        try {
            return await http.get(url, data);
        } catch (error) {
            return {
                type: 'error',
                status: error.status,
                errorMsg: error.message
            }
        }
    }
}