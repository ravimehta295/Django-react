from django.test import TestCase
from django.test import Client


class SearchTestCase(TestCase):
    def test_search_results(self):
        c = Client()
        result = c.get('/api/v1/search/')
        self.assertEquals(200, result.status_code)
        result_json = result.json()
        self.assertEquals(5, result_json['count'])
