#include <string>
#include <vector>

using namespace std;

int minCost(string colors, vector<int>& neededTime) {
  int result = 0;
  char lastString = colors[0];
  for ( int i = 1 ; i < colors.size() -1 ; i++) {
    if (colors[i] === lastString) {
      result += min(neededTime[i], neededTime[i-1]);
      neededTime[i] = max(neededTime[i], neededTime[i-1]);
    }
  }
  return result;
}